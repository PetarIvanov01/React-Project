import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`

    #root {
        margin: auto;
        height: 100vh;
        width: 100%;
        top: 0;
        left: 0;
        background: transparent;

        --font-agbalumo: 1em 'Agbalumo' cursive;
        --font-indie: 1em  cursive;
        --font-roboto: 1em 'Roboto' sans-serif;
    }
 
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;

    }

    html {
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-image: url("/imgs/background-high.jpg"),url("/imgs/background-low.jpg");

        background-position: center;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        overflow-x: hidden;
        padding: 0;
        margin: 0;
    }
`;