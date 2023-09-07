import { styled } from "styled-components";

export const FormContainerStyle = styled.div`

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 80%;
    max-width: 400px;

    & h2 {
        text-align: center;
        margin-bottom: 20px;
    }

    & label,input,textarea {
        display: block;
        width: 100%;
        margin-bottom: 15px;
    }
    & input{
        height: 2em;
    }

    & select {
        display: block;
        margin-bottom: 15px;
    }

    & button {
        display: block;
        margin: 0 auto;
        background-color: #C5A78F;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }
`