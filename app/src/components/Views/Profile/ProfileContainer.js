import { Link } from "react-router-dom";
import { AboutMe, Avatar, CardContainer, Description, Followers, Profile, StyledParagraph, Desc, ProfileData, Topics, EditProfileStyle } from "../../../styles/ViewsStyles/ProfileStyle/Profile.style";
import TopicCardsView from "./TopicsView";
import { useProfile } from "../../../contexts/profile";

export default function ProfileContainer({ }) {

    const { profile } = useProfile();

    return (
        <CardContainer >
            <Profile >
                <Avatar src={profile?.avatarImg} alt="" />
                <ProfileData >
                    <StyledParagraph>Username: {profile?.username}</StyledParagraph>
                    {/* <StyledParagraph>Email: {profile?.username}</StyledParagraph> */}
                </ProfileData>
                <Followers >
                    {/* Todo make followers req */}
                    <StyledParagraph>Followers: 21</StyledParagraph>
                </Followers>

                <EditProfileStyle>
                    {/* TODO edit user id */}
                    <Link to={`/edit/profile/${profile?.id}`}><img src="/imgs/svg/edit.svg" alt="Edit Icon" /></Link>
                </EditProfileStyle>

            </Profile>

            <Description >
                <AboutMe >About Me</AboutMe>
                <Desc >{profile?.about}</Desc>
            </Description>

            <Topics >
                <h2>Topics</h2>

                <TopicCardsView goals={profile.goals} />

            </Topics>
        </CardContainer>
    )
}