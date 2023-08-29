import { AboutMe, Avatar, CardContainer, Description, Followers, Profile, StyledParagraph, Desc, ProfileData, Topics } from "../../../styles/ViewsStyles/ProfileStyle/Profile.style";
import TopicCardsView from "./TopicsView";

export default function ProfileView() {



    return (
        <CardContainer >

            <Profile >
                <Avatar  src="/imgs/Avatars/Avatar-1.png" alt="" />
                <ProfileData >
                    <StyledParagraph>Username: Nqkoisitam12</StyledParagraph>
                    <StyledParagraph>Email: geri@abv.bg</StyledParagraph>
                </ProfileData>
                <Followers >
                    <StyledParagraph>Followers: 21</StyledParagraph>
                </Followers>
            </Profile>

            <Description >
                <AboutMe >About Me</AboutMe>
                <Desc >Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias suscipit eaque iste nemo dolore autem obcaecati quis vitae ad ipsa omnis dicta a nam sit itaque voluptates, esse laboriosam illum veritatis repellat corporis harum debitis qui! Quas officiis obcaecati fugit ea, porro doloremque ducimus maxime sequi corrupti eum saepe eos. </Desc>
            </Description>

            <Topics >
                <h2>Topics</h2>

                <TopicCardsView />

            </Topics>
        </CardContainer>
    );
}