import { useParams } from "react-router-dom";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

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
    PersonalData,
} from "../../styles/ViewsStyles/ProfileStyle/Profile.style";
import { getProfileDetails } from "../../api/services/profileApi";

import TopicsContainer from "./components/Topics/Topics";
import NoTopics from "./components/Topics/NoTopics";
import { FollowButtons } from "./components/Followers/FollowButtons";
import { ProfileControls } from "./components/ProfileControls";

export default function ProfileContainer() {

    const throwToErrBoundry = useErrorBoundryAsync();
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
    }, [userId, throwToErrBoundry]);

    const isOwner = user.id === profile.userId;

    const isFollowedMemoized = useMemo(() => {
        return profile.followers.some(e => e === user.id);
    }, [profile.followers, user.id])

    const onFollowClick = useCallback(async (e, func) => {
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
    }, [throwToErrBoundry, user.id, profile.userId])

    return (
        <CardContainer >
            <Profile >

                <Avatar src={profile.avatarImg.value} alt={profile.avatarImg.label} />

                <ProfileData >
                    <StyledParagraph>Username: {profile.username}</StyledParagraph>
                    <StyledParagraph>Category: {profile.category}</StyledParagraph>
                </ProfileData>

                <ProfileControls
                    followers={profile.followers}
                    isOwner={isOwner}
                    profileId={profile.userId}
                    userId={user.id} />

            </Profile>

            <Description >

                <PersonalData>
                    <AboutMe >About Me</AboutMe>
                    {(user.id && isOwner) &&
                        <AboutMe>Email: {user.email}</AboutMe>
                    }
                </PersonalData>

                <Desc >{profile.aboutMe}</Desc>

                {user.id && (
                    (isLoaded.current &&
                        <FollowButtons
                            onFollowClick={onFollowClick}
                            isFollowed={isFollowedMemoized}
                            isOwner={isOwner} />
                    )
                )
                }
            </Description>

            {profile.goals.length ? <TopicsContainer goals={profile.goals} /> : <NoTopics owner={isOwner} />}

        </CardContainer>
    )
}