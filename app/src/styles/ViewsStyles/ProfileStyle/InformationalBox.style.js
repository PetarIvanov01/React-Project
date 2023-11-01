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
  max-width: 700px;
  min-width: 600px;
  min-height: 300px;
  max-height: 800px;
  text-align: center;


  h2 {
    font-size: 24px;
    margin-bottom: 10px;
    font: var(--font-indie);
  }

  p {
    line-height: 1.3;
    text-align: start;
    font-size: 16px;
    margin-bottom: 20px;
    overflow: auto;
    font: var(--font-indie);
    padding: 0 10px;


    .desc {
      font-weight: bold;
      font-size: 1.1em;
    }
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 4px;
  }

  img {
    width: 20em;
    height: 12em;
    margin-bottom: 2em;
    border: 5px solid rgba(0, 0, 0, 0.7);
    padding: 1em;
  }

`;
