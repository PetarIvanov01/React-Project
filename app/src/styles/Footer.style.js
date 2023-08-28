import { styled } from "styled-components";

export const FooterStlye = styled.footer`

    height: 4rem;
    background-color: #887d7d;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    & .copyrights {
        margin-left: 16px;
        background-color: #c5c8cb;
        padding: 10px;
    }

    & .icons {
        margin-right: 16px;
        padding: 10px;
        display: flex;
        gap: 1em;
    }

    & ul {
        list-style-type: none;
        margin-top: 0.5em;
        display: flex;
        justify-content: space-between;
    }


`

