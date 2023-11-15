import { styled } from "styled-components";
import { CardStyle } from "../HomeStyle/CardHomeStyle.style";

export const CatalogCardsStyle = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 6em;

   & .no-matches {
    text-align: center;
    }

    & ${CardStyle} {
        margin: 0;
    }
`

