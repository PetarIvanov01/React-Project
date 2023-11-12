import { styled } from "styled-components";

export const MainStyle = styled.main`

    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;

    .error{
        color: red;
    }

`

export const SectionStyle = styled.div`

    background-image: url("/imgs/imgView-high.jpg"),url("/imgs/imgView-low.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-width: 100%;
    min-height: 300px;
    
    display: flex;
    justify-content: center;
    flex-grow: 1;
    

    & .title {
        font: var(--font-indie);
        height: 82px;
        margin-top: 5.5em;
        background-color: rgba(195, 192, 192, 0.1);
        display: flex;
        align-items: center;
    }
    
    &  .title > h2 {
        padding: 5px 20px;
    }

    @media (max-width: 830px) { 
        flex-direction: column;
        gap: 0;
        min-height: 300px;

        .title{
            margin: 0 auto;
            text-align: center;
        }
    }
`