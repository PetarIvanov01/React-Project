import styled from 'styled-components';


export const Avatar = styled.img`
    width: 95px;
    height: 87px;
    border-radius: 50%;
`;

export const CardContainer = styled.div`

    display: flex;
    flex-direction: column;
    min-height: 900px;
    width: 50em;
    padding: 1.5em;
    background: #c5c8cb;
    border: 7px solid #BDBDBD;
    border-radius: 0 50px;
`;

export const Profile = styled.section`
    border: 3px solid #A196A1 ;
    margin: 2em 0;
    position: relative;
    background-color: #D9d9d9;
    border-radius: 25px;
    display: flex;
    gap: 1em;
    align-items: center;
`;

export const Followers = styled.div`
font: var(--font-indie);
    margin: 0 auto;
`;

export const ProfileData = styled.div`
font: var(--font-indie);
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
    position: relative;
    margin: 2.5em 0;
`;

export const AboutMe = styled.p`
    font: var(--font-indie);
    border-radius: 20px;
    padding: 8px 12px;
    background-color: #D9d9d9;
    width: max-content;
    margin-bottom: 8px;
`;

export const Desc = styled.p`
    font: var(--font-indie);
    border: 3px solid #A196A1;
    height: 100px;
    border-radius: 20px;
    padding: 8px 12px;
    background-color: #D9d9d9;
`;

export const Topics = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto 0;

    & h2{
        background-color: rgba(167,159,159,0.4);
        padding: 8px;
        border-radius: 1em;
        font-size: 1.3em;
        font-weight: 500;
    }
`;

export const Cards = styled.div`
    display: flex;
    gap: 2em;

    & a {
        text-decoration: none;
        color: rgba(107, 31, 34, 0.9);
        padding-top: 8px;
    }

    & a:hover {
        color: black;
    }
`;

export const FollowContainer = styled.div`

    position: absolute;
    top: 0;
    right: 10px;

`






