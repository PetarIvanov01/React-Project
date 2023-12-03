import styled from 'styled-components';


export const Avatar = styled.img`
    width: 95px;
    height: 87px;
    border-radius: 50%;

`;

export const CardContainer = styled.div`

    margin: 1em 0;
    display: flex;
    flex-direction: column;
    min-height: 900px;
    max-width: 50em;
    min-width: 800px;
    padding: 1.5em;
    background: #c5c8cb;
    border: 7px solid #BDBDBD;
    border-radius: 0 50px;
    font: var(--font-indie);

    @media (max-width:820px) {
        margin: 1em;
        padding: 0.5em;
        width: auto;
        min-width: auto;
        & > * {
            width: auto;
        }
    }
`;

export const Profile = styled.section`

    padding: 0.5em;
    display: flex;
    align-items: center;
    gap: 1em;
    border: 3px solid #A196A1 ;
    margin: 2em 0;
    position: relative;
    background-color: #D9d9d9;
    border-radius: 25px;
    
    @media (max-width:660px) {
        display: flex;
        flex-direction: column;
        max-width: 300px;
        margin: 0 auto;
        padding: 1em; 
    }

`;

export const StyledParagraph = styled.div`
    border-radius: 20px;
    padding: 5px 7px;
    background-color: #c5c8cb;
    width: max-content;
`;

export const ProfileData = styled.div`

    font: var(--font-indie);
    display: flex;
    flex-direction: column;
    gap: 10px;

`;

export const PersonalData = styled.div`
`

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
    min-width: 100%;
    @media (max-width:820px) {
        height: auto;
    }
`;

export const Topics = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto 0;

    & .title-goals{
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

    @media (max-width:820px) {
        flex-direction: column;

        /* & * {
            max-width: 310px;
        } */
    }
`;

export const FollowContainer = styled.div`

    position: absolute;
    top: 0;
    right: 10px;

    &:hover {
        transform: scale(1.05); 
    }

`;

export const Followers = styled.div`
    font: var(--font-indie);
    cursor: pointer;
    margin: 0 auto;
    position: relative; 
    
`;

export const ShowFollowers = styled.div`

    display: ${({ $show }) => $show === 'true' ? 'flex' : 'none'};
    flex-direction: column;
    gap: 10px;
    position: absolute;
    margin-top: 10px;
    z-index: 1;
    background-color:rgba(148, 138, 132, 0.84);
    padding: 1em;
    border-radius: 10px;
    
    & img {
        width: 40px;
    }

    & .user {
        display: flex;
        align-items: center;
        gap:10px;
        background-color: rgba(181, 138, 132, 1);
        border-radius: 30px;

        &:hover {
            transform: scale(1.05); 
        }

        p {
            font-family: var(--font-agbalumo);
            font-weight: bold;
            font-size: 13px;
            padding-right: 5px;
        }
    }

    
`

