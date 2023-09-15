import { styled } from "styled-components";

export const CardStyle = styled.div`

        min-width: 400px;
        min-height: 380px;
        background-color: #c5c8cb;
        margin: 3.5em 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;


        & .profile {
            margin-top: 10px;
            width: 90%;
            background-color: #bbbec2;
            display: flex;
            gap: 10px;
            border-radius: 20px;

            & > p {
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
            width: 100%;
            height: 110px;
            align-self: flex-start;
            margin-left: 18px;

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
            min-width: 311px;
            background-color: #d9d9d9;
            min-height: 110px;
            margin: 20px;
            padding: 8px;
        }

        & a {
                background-color: #d9d9d9;
                padding: 5px 10px;
                margin-bottom: 10px;
                border-radius: 20px;
                cursor: pointer;
                text-decoration: none;
                color: black;
        }

        & a:hover {
                background-color: #bbbec2;
        }

        h3 {
            text-align: center;
        }

`