import { styled } from "styled-components";

export const CreateFormStyle = styled.div`

    background-color: #F9F3F3;
    opacity: 90%;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 6px 6px 4px 0px rgba(0, 0, 0, 0.3),inset 0px 3px 3px 0px rgba(0, 0, 0, 0.3);
    min-height: 500px;
    min-width: 500px;

    display: flex;
    flex-direction: column;
    align-items: center;

    & h2 {
        text-align: center;
        width: 275px;
        margin-bottom: 2.5em;
    }

    & form {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

`