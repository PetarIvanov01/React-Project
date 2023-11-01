import styled from "styled-components";

export const HeaderStyle = styled.header`

    height: 70px;
    background-color: #887d7d;

    & > nav {

        height: 100%;
        display: flex;
        text-align: center;
        justify-content: space-between;
        align-items: center;

    }

    & .logo {
        margin-left: 8px;
        background-color: #d9d9d9;
        padding: 7px 15px;
        border-radius: 50px;
    }


    & .goals {
        padding: 7px 30px;
        background-color: #d9d9d9;
        border-radius: 5px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        font:var(--font-indie)
    }

    & a {
        font:var(--font-indie);
        display: block;
        text-decoration: none;
        color: black;
    }

    & img {
        height: 40px;
        width: 45px;
    }
`

export const SignInStyle = styled.div`

    margin-right: 8px;
    display: flex;
    gap: 1em;

    & a {
        background-color: #d9d9d9;
        padding: 7px 12px;
        border-radius: 50px;
    }

`