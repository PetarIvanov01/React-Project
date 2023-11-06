import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/auth";

import { Link } from "react-router-dom";
import { AboutMe, Avatar, CardContainer, Description, Followers, Profile, StyledParagraph, Desc, ProfileData, FollowContainer } from "../../../styles/ViewsStyles/ProfileStyle/Profile.style";

import { followProfile, getProfileDetails, unFollowProfile } from "../../../api/services/profileApi";

import TopicsContainer from "./Topics/Topics";
import NoTopics from "./Topics/NoTopics";
import { EditProfileStyle } from "../../../styles/ViewsStyles/ProfileStyle/CardStyle.style";

export default function ProfileContainer({ userId }) {

    const { user } = useAuth();
    const [profile, setProfileData] = useState({
        username: '',
        avatarImg: '',
        category: '',
        aboutMe: '',
        goals: [],
        followers: []
    });

    useEffect(() => {

        let isMounted = true;

        getProfileDetails(userId)
            .then(profile => {
                if (isMounted) {
                    setProfileData({ ...profile, userId: userId });
                }
            })
            .catch(err => console.log(err));

        return () => {
            isMounted = false;
        };
    }, [userId]);
    
    const isFollowed = profile.followers.some(e => e === user?.id)
    const isOwner = user?.id === profile.userId;

    async function onFollowClick(e, func) {
        e.preventDefault();
        const data = {
            currentUserId: user?.id,
            profileId: profile.userId
        }
        const result = await func(data);
        setProfileData(state => ({ ...state, followers: result.followers }))
    }
    return (
        <CardContainer >
            <Profile >

                <Avatar src={profile.avatarImg} alt="" />

                <ProfileData >
                    <StyledParagraph>Username: {profile.username}</StyledParagraph>
                    {isOwner && <StyledParagraph>Email: {user?.email}</StyledParagraph>}
                </ProfileData>

                <Followers >
                    <StyledParagraph>Followers: {profile.followers.length}</StyledParagraph>
                </Followers>

                {isOwner &&
                    <EditProfileStyle>
                        <Link to={`/edit/profile/${profile.userId}`}><img src="/imgs/svg/edit.svg" alt="Edit Icon" /></Link>
                    </EditProfileStyle>
                }

            </Profile>

            <Description >
                <AboutMe >About Me</AboutMe>
                {user && (
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
                }
                <Desc >{profile.aboutMe}</Desc>
            </Description>

            {profile.goals.length ? <TopicsContainer goals={profile.goals} /> : <NoTopics owner={isOwner} />}

        </CardContainer>
    )
}