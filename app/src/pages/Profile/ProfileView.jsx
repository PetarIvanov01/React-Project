import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { useAuth } from "../../contexts/auth";
import useErrorBoundryAsync from "../../hooks/useErrorBoundryAsync";

import {
    AboutMe,
    Avatar,
    CardContainer,
    Description,
    Profile,
    StyledParagraph,
    Desc,
    ProfileData,
    FollowContainer
} from "../../styles/ViewsStyles/ProfileStyle/Profile.style";
import { EditProfileStyle } from "../../styles/ViewsStyles/ProfileStyle/CardStyle.style";
import { followProfile, getProfileDetails, unFollowProfile } from "../../api/services/profileApi";

import TopicsContainer from "./components/Topics/Topics";
import NoTopics from "./components/Topics/NoTopics";
import FollowersToggle from "./components/Followers/FollowersToggle";

export default function ProfileContainer() {

    const throwToErrBoundry = useErrorBoundryAsync()
    const { userId } = useParams();
    const { user } = useAuth();
    const isLoaded = useRef(false);

    const [profile, setProfileData] = useState({
        username: '',
        avatarImg: {},
        category: '',
        aboutMe: '',
        goals: [],
        followers: [],
        userId: null
    });

    useEffect(() => {

        let isMounted = true;

        getProfileDetails(userId)
            .then(profile => {
                if (isMounted) {
                    setProfileData({ ...profile, userId: userId });
                    isLoaded.current = true;
                }
            })
            .catch(throwToErrBoundry)

        return () => {
            isMounted = false;
        };
    }, [userId]);

    const isFollowed = profile.followers.some(e => e === user.id);
    const isOwner = user.id === profile.userId;

    async function onFollowClick(e, func) {
        e.preventDefault();
        try {

            const data = {
                currentUserId: user.id,
                profileId: profile.userId
            }
            
            const result = await func(data);
            setProfileData(state => ({ ...state, followers: result.followers }));

        } catch (error) {
            throwToErrBoundry(error)
        }
    }

    return (
        <CardContainer >
            <Profile >

                <Avatar src={profile.avatarImg.value} alt={profile.avatarImg.label} />

                <ProfileData >
                    <StyledParagraph>Username: {profile.username}</StyledParagraph>
                    {isOwner && <StyledParagraph>Email: {user.email}</StyledParagraph>}
                </ProfileData>

                <FollowersToggle followers={profile.followers} />

                {isOwner &&
                    <EditProfileStyle>
                        <Link to={`/edit/profile/${profile.userId}`}><img src="/imgs/svg/edit.svg" alt="Edit Icon" /></Link>
                    </EditProfileStyle>
                }

            </Profile>

            <Description >
                <AboutMe >About Me</AboutMe>
                <Desc >{profile.aboutMe}</Desc>
                {user.id && (
                    (isLoaded.current &&
                        <FollowContainer>
                            {isOwner ||
                                (isFollowed ?
                                    <Link onClick={(e) => onFollowClick(e, unFollowProfile)} ><img src="/imgs/Icons/unfollow.png" alt="unfollow Icon" /></Link>
                                    :
                                    <Link onClick={(e) => onFollowClick(e, followProfile)} ><img src="/imgs/Icons/follow.png" alt="follow Icon" /></Link>
                                )
                            }
                        </FollowContainer>
                    )
                )
                }
            </Description>

            {profile.goals.length ? <TopicsContainer goals={profile.goals} /> : <NoTopics owner={isOwner} />}

        </CardContainer>
    )
}