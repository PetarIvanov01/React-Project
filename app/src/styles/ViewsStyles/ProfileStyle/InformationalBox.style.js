import styled from 'styled-components';


export const BlurredBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); 
  backdrop-filter: blur(10px); 
  display: ${props => (props.$show ? 'block' : 'none')};

`;

export const InformationBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #d0d2d4;
  border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 3px 3px 4px 4px rgba(0, 0, 0, 0.7);
  max-width: 600px;
  min-width: 800px;
  max-height: 600px;
  text-align: center;


  &  .title {
        background-color: rgba(167,159,159,0.4);
        padding: 0.3em;
        margin-bottom: 1em;
        border-radius: 1em;
        font-size: 1.3em;
        font-weight: 500;
  }

  &  p {
    border: 3px solid rgba(167,159,159,0.8);
    line-height: 1.3;
    text-align: start;
    font-size: 16px;
    margin-bottom: 20px;
    overflow: auto;
    font: var(--font-indie);
    padding: 5px 10px;

    .desc {
      font-weight: bold;
      font-size: 1.1em;
    }
  }

  button {
    background-color: #C5A78F;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }

  img {
    width: 20em;
    height: 12em;
    margin-bottom: 2em;
    border: 5px solid rgba(0, 0, 0, 0.7);
    padding: 1em;
  }

  @media (max-width:820px) {
    min-width: 620px;
    & img{
      width: 280px;
    }
  }
  @media (max-width:650px) {
    min-width: auto;
  }

`;
