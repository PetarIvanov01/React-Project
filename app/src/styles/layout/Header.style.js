import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyle = styled.header`

    font:var(--font-indie);
    height: 74px;
    background-color: #887d7d;

    @media(max-width:650px) {
        height: 120px;
    }

    & > nav {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media(max-width: 650px) {
            flex-direction: column;
            transition: all 0.3s ease;

            .logo {
                margin: 0.5em 0.5em;
                position: absolute;
                left: 0;
            }
            .goals {
                margin: 1em 0;
                position: static;
                transform: none;
            }

        }
    }

    & .goals {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);

        & a {
            padding: 7px 30px;
            background-color: #d9d9d9;
            border-radius: 5px;
        }

    }

    & a {
        font:var(--font-indie);
        display: block;
        text-decoration: none;
        color: black;
    }

    .active {
        background-color: rgba(219, 217, 131, 0.89) !important;
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
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

    @media (max-width: 650px) {
        margin-bottom: 1em;
    }

`
export const AnchorNavs = styled(NavLink)`
   
    position: relative;
    transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease; 
       
    &:hover {
        background-color: rgba(219, 217, 131, 0.89);
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
    
`
export const LogoContainer = styled.div`

    margin-left: 8px;

    & a {
        border-radius: 30px;
        background-color: #d9d9d9;
        padding: 8px 12px;
        display: block;
    }

    .logo-icon {
        display: flex;
        width: 45px;
        & img {
            width: 100%;
            height: 100%;
        }
    }

    @media(max-width: 650px) {
        margin: 0 0.5em;
        position: absolute;
        left: 0;
    }
`;
