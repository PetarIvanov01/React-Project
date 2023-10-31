import { styled } from "styled-components";

export const CardContainerStyle = styled.section`

    display: flex;
    gap: 5em;
    

    & .more-info {
        width: max-content;
        margin: 0 auto;
        background-color: #bbbec2;

        & h3 {
            padding: 16px 20px;
        }
        
    }
`