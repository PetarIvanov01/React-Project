import styled from 'styled-components';

export const Avatar = styled.img`
    width: 95px;
    height: 87px;
    border-radius: 50%;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-evenly; */
    min-height: 900px;
    width: 80%;
    border-radius: 100px;
    background-color: #c5c8cb;
    /* margin: 1em; */
    padding: 1.5em;
`;

export const Profile = styled.section`
    margin: 2em 0;
    position: relative;
    background-color: #D9d9d9;
    border-radius: 25px;
    display: flex;
    gap: 1em;
    align-items: center;
`;

export const Followers = styled.div`
    margin: 0 auto;
`;

export const ProfileData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

`;

export const StyledParagraph = styled.p`
    border-radius: 20px;
    padding: 5px 7px;
    background-color: #c5c8cb;
`;

export const Description = styled.section`
    margin: 2.5em 0;
`;

export const AboutMe = styled.p`
    border-radius: 20px;
    padding: 8px 12px;
    background-color: #D9d9d9;
    width: max-content;
    margin-bottom: 8px;
`;

export const Desc = styled.p`
    height: 100px;
    border-radius: 20px;
    padding: 8px 12px;
    background-color: #D9d9d9;
`;

export const CardTopics = styled.div`
    width: 21em;
    margin: 12px 0;
    background-color: #c5c8cb;
    position: relative;
    display: flex;
  flex-direction: column;
`;

export const TopicsImage = styled.img`
    width: 100%;
    max-height: 175px;
`;

export const Topics = styled.div`
    background-color: #d9d9d9;
    text-align: center;
    margin: auto 0;
`;

export const Cards = styled.div`
    display: flex;
    justify-content: space-evenly;

    & a {
        text-decoration: none;
        color: rgb(128, 125, 125);
        padding-top: 8px;
    }

    & a:hover {
        color: black;
    }
`;

export const CardTitle = styled.div`
    padding: 5px 0;
    border-bottom: 1px solid black;
`;

export const TopicDescription = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    flex: 1; /* Add this line to make it fill the available space */
`;

export const DescriptionParagraph = styled.p`
    text-align: start;
`;

export const EditProfileStyle = styled.div`
    position: absolute;
    right: 3em;
`
export const EditGoalStyle = styled.div`

    display: flex;
    gap: 1em;
    justify-content: center;
    margin-top: auto;

    & .owner-buttons {
        display: flex;        
        gap: 2em;
    }
`


