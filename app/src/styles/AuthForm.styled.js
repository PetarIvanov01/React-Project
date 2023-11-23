import styled from "styled-components";

export const AuthForm = styled.div`

    background-color: #F9F3F3;
    opacity: 90%;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 6px 6px 4px 0px rgba(0, 0, 0, 0.3),inset 0px 3px 3px 0px rgba(0, 0, 0, 0.3);
    min-height: 250px;
    min-width: 350px;

    transition: all 0.3s ease-in-out; 
    display: flex;
    flex-direction: column;
    align-items: center;

    & form {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    & h2 {
        text-align: center;
        margin-bottom: 1em;
        text-align: center;
        color: #A9826F;
       
    }
    & h3 {
        color: red;
    }

    @media (max-width:400px) {
        min-width: 200px;
        transition: all 0.3s ease-in-out; 
    }
` 

export const ProfileActionMessage  = styled.div`

    margin-top: 10px;

    p {
        margin: 0;
        font-size: 14px;
    }

    a {
        cursor: pointer;
        font-size: 1.1em;
        &:hover {
            text-decoration: none
        }
    }

    &::before {
    content: '';
        display: block;
        border: 1px solid #A9826F ;
        margin: 10px auto; 
    }
`;
