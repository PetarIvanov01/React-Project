import { styled } from "styled-components";

export const RegisterStyle = styled.div`

    margin: 0 auto;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 80%;
    max-width: 400px;

    & h2 {
        margin-bottom: 20px;
    }

    & label,input {
        display: block;
        width: 100%;
        margin-bottom: 15px;
    }

    & button {
        background-color: #C5A78F;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }

`