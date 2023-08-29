import styled from 'styled-components';

export const BlurredBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); 
  backdrop-filter: blur(10px); 
  display: ${props => (props.show ? 'block' : 'none')};
`;

export const InformationBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em ;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #d0d2d4;
  border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 876.5px;
  max-height: 690px;
  text-align: center;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    line-height: 1.3;
    text-align: start;
    font-size: 16px;
    margin-bottom: 20px;
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
  }
`;
