import styled from "styled-components";

export const LikeStyle = styled.div`

    cursor: pointer;
    display:flex;

    img {
        width: 100%;
        height: 100%;
    }
  
    &:hover {
        transform: scale(1.05); 
    }
`