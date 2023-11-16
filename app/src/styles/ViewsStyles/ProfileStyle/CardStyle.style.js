import styled from "styled-components";

export const CardTopics = styled.div`
    width: 21em;
    margin: 12px 0;
    background-color: #c5c8cb;
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 3px solid #A196A1;
`;

export const TopicsImage = styled.img`
    width: 100%;
    height: 175px;
    border-bottom: 2px solid #A196A1;
`;

export const CardTitle = styled.div`
    padding: 5px 0;
    border-bottom: 2px solid #A196A1;
    font: var(--font-indie);
`;

export const TopicDescription = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    flex: 1; 
`;
export const DescriptionParagraph = styled.p`
    word-wrap: break-word;
    text-align: start;
    font: var(--font-indie);
`;

export const EditProfileStyle = styled.div`
    position: absolute;
    right: 3em;

    @media (max-width: 820px) {
        top: 4em;
        right: 4em;
    }
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