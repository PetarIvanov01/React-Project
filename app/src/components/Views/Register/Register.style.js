import { styled } from "styled-components";

export const RegisterFormStyle = styled.div`
    background-color: #F9F3F3;
    opacity: 90%;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 6px 6px 4px 0px rgba(0, 0, 0, 0.3),inset 0px 3px 3px 0px rgba(0, 0, 0, 0.3);
    min-height: 250px;
    min-width: 400px;

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
        width: 275px;
        margin-bottom: 1.5em;
    }
    & h3 {
        color: red;
    }

    @media (max-width:400px) {
        min-width: 200px;
        transition: all 0.3s ease-in-out; 
    }
` 