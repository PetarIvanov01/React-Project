import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        background-image: 
            url('/imgs/background.jpg');
        background-position: center;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        overflow-x: hidden;
        padding: 0;
        margin: 0;
    }

    #root {
        margin: auto;
        height: 100vh;
        width: 100%;
        top: 0;
        left: 0;
        background: transparent;
    }
`;