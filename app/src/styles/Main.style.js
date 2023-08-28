import { styled } from "styled-components";

export const MainStyle = styled.main`

    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;

`

export const SectionStyle = styled.div`

    background-image: url("/imgs/imgView.jpeg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 37em;
    display: flex;
    justify-content: center;


    & .title {
        height: 82px;
        margin-top: 5.5em;
        background-color: rgba(195, 192, 192, 0.1);
        display: flex;
        align-items: center;
    }
    
    &  .title > h2 {
        padding: 5px 20px;
    }


`