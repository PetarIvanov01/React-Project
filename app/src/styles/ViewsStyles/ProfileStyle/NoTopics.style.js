import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  text-align: center;
`;

export const Message = styled.p`
  font-size: 1.5em;
  color: #333;
`;

export const CreateButton = styled.button`

  background-color: #d9d9d9;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  margin-top: 10px;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      background-color: rgba(219, 217, 131, 0.89);
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
    & a {
      text-decoration: none;
      color: #000;
    }
`;
