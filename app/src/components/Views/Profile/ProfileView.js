import { AboutMe, Avatar, CardContainer, Description, Followers, Profile, StyledParagraph, Desc, ProfileData, Topics } from "../../../styles/ViewsStyles/ProfileStyle/Profile.style";
import TopicCardsView from "./TopicsView";

export default function ProfileView() {



    return (
        <CardContainer className="card-container">

            <Profile className="profile">
                <Avatar className="avatar" src="/imgs/Avatars/Avatar-1.png" alt="" />
                <ProfileData className="profile-data">
                    <StyledParagraph>Username: Nqkoisitam12</StyledParagraph>
                    <StyledParagraph>Email: geri@abv.bg</StyledParagraph>
                </ProfileData>
                <Followers className="folowers">
                    <StyledParagraph>Followers: 21</StyledParagraph>
                </Followers>
            </Profile>

            <Description className="description">
                <AboutMe className="about-me">About Me</AboutMe>
                <Desc className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida a lacus non pulvinar. Curabitur ultricies, magna a ultrices sodales, velit nisl rutrum neque, eget vehicula elit tellus eget nibh. Sed finibus porta nulla, sit amet sodales sed.</Desc>
            </Description>

            <Topics className="topics">
                <h2>Topics</h2>

                <TopicCardsView />

            </Topics>
        </CardContainer>
    );
}