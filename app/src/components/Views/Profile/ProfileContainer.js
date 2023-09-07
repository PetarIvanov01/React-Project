import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/auth";

import { Link } from "react-router-dom";
import { AboutMe, Avatar, CardContainer, Description, Followers, Profile, StyledParagraph, Desc, ProfileData, EditProfileStyle } from "../../../styles/ViewsStyles/ProfileStyle/Profile.style";

import { getProfileDetails } from "../../../api/profileApi";

import TopicsContainer from "./Topics/Topics";
import NoTopics from "./Topics/NoTopics";

export default function ProfileContainer({ userId }) {

    const { user } = useAuth();
    const [profile, setProfileData] = useState({});

    useEffect(() => {

        getProfileDetails(userId).then(profile => {
            setProfileData({ ...profile, userId: userId })
        })
            .catch(err => console.log(err))


    }, [userId])


    const isOwner = user?.id === profile?.userId


    return (
        <CardContainer >
            <Profile >
                <Avatar src={profile?.avatarImg} alt="" />
                <ProfileData >
                    <StyledParagraph>Username: {profile?.username}</StyledParagraph>
                    {isOwner && <StyledParagraph>Email: {user?.email}</StyledParagraph>}
                </ProfileData>
                <Followers >
                    {/* Todo make followers req */}
                    <StyledParagraph>Followers: 21</StyledParagraph>
                </Followers>

                {isOwner ?
                    <EditProfileStyle>
                        <Link to={`/edit/profile/${profile?.userId}`}><img src="/imgs/svg/edit.svg" alt="Edit Icon" /></Link>
                    </EditProfileStyle>
                    :
                    ''
                }

            </Profile>

            <Description >
                <AboutMe >About Me</AboutMe>
                <Desc >{profile?.about}</Desc>
            </Description>

            {profile.goals?.length ? <TopicsContainer goals={profile?.goals} /> : <NoTopics owner={profile?.userId === user?.id} />}

        </CardContainer>
    )
}