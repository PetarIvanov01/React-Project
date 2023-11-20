import { styled } from "styled-components";

export const CardStyle = styled.div`

        max-width: 400px;
        max-height: 380px;
        margin: 3.5em 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #c5c8cb;
        border: 7px solid #BDBDBD;
        border-radius: 4px 18px 18px 17px;
        

        & .profile {
            margin-top: 10px;
            width: 90%;
            background-color: #bbbec2;
            display: flex;
            gap: 10px;
            border-radius: 20px;

            & > p {
                font: var(--font-indie);
                font-weight: normal;
                margin-top: 10px;
                text-align: center;
                background-color: #d9d9d9;
                padding: 5px 16px;
                height: max-content;
                border-radius: 20px;
            }
            & .avatar {
                width: 85px;
                height: 77px;
                border-radius: 20px;
            }
        }

        & .categories {
            height: 110px;
            align-self: flex-start;
            margin-left: 18px;
            font:var(--font-indie);

            & > p {
                line-height: 2;
                color: #6d6f70;
            }

            & ul {
                margin-left: 1em;
                display: flex;
                flex-direction: column;
                gap: 0.6em;

                & .category-li {
                    display: flex;
                    gap: 0.4em;
                }
            }

        }
        & .posts {
            font: var(--font-indie);

            width: 311px;
            background-color: #d9d9d9;
            min-height: 110px;
            margin: 20px 10px;
            padding: 8px;
            border: 2px solid #b8adab;
        }

        & .followers {
            font: var(--font-indie);
            margin-left: auto;
            margin-right: 0.7em;
            background-color: #d9d9d9;
            padding: 5px 16px;
            border-radius: 20px;
        }

        & a {
                background-color: #d9d9d9;
                padding: 5px 10px;
                margin-bottom: 10px;
                border-radius: 20px;
                cursor: pointer;
                text-decoration: none;
                color: black;
                font:var(--font-indie)
        }

        & a:hover {
                background-color: #bbbec2;
        }

        h4 {
            text-align: center;
            font-weight: 500;
        }


        @media (max-width: 360px ) {

            .posts {
                min-height: 110px;
            }
        }
`