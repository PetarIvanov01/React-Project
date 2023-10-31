import { styled } from "styled-components";

// export const RegisterStyle = styled.div`

//     margin: 0 auto;
//     background-color: white;
//     padding: 20px;
//     border-radius: 10px;
//     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//     width: 80%;
//     max-width: 400px;

//     & h2 {
//         margin-bottom: 20px;
//     }

//     & label,input {
//         display: block;
//         width: 100%;
//         margin-bottom: 15px;
//     }

//     & button {
//         background-color: #C5A78F;
//         color: white;
//         border: none;
//         padding: 10px 20px;
//         border-radius: 5px;
//         cursor: pointer;
//     }

// `

export const RegisterFormStyle = styled.div`
    background-color: #F9F3F3;
    opacity: 90%;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 6px 6px 4px 0px rgba(0, 0, 0, 0.3),inset 0px 3px 3px 0px rgba(0, 0, 0, 0.3);
    min-height: 250px;
    min-width: 400px;

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
` 