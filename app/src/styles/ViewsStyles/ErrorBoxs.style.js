import styled from "styled-components";

export const CreateGoalErrorBox = styled.div`

    position: absolute;
    top: 20%;
    background-color: rgba(244, 67, 54, 0.8); 
    color: #fff; 
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    font-size: 16px;
    text-align: center;

`

export const AuthErrorBox = styled.div`
    position: absolute;
    top: 25%;
    background-color: rgba(244, 67, 54, 0.8); 
    color: #fff; 
    padding: 15px 10px;
    margin: 10px 0;
    border-radius: 5px;
    font-size: 1.1em;
    text-align: center;
`

export const CreateProfileBox = styled.div`

    position: absolute;
    top: 15%; 
    left: 50%;
    transform: translate(-50%, -50%); 
    background-color: rgba(155, 113, 95, 0.46);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.4);
    text-align: center;
    transition:  0.2s ease-out;

    p {
        font-size: 1.4em;
        color: rgba(197, 113, 95, 0.8);
        font-family: sans-serif;

    }

    @media (max-height:990px) {
        top: 8%;
        min-width: 250px;
        padding: 5px 10px;
        transition: 0.2s ease-in;
    }
    

`