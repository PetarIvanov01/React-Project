import { styled } from "styled-components";

export const SectionCardsStyle = styled.div`

    min-height: auto;
    display: flex;
    flex-direction: column;
    
    & .more-info {
        width: max-content;
        margin: 0 auto;
        background: #bbbec2; 
        border: 6px solid #BDBDBD;
        border-radius: 15px;
        
        & h3 { 
            padding: 16px 20px;
        }
    }

`