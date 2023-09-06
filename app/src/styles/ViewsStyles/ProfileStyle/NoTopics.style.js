import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  text-align: center;
`;

export const Message = styled.p`
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

  &:hover {
    background-color: #0056b3;
  }
  & a {
    text-decoration: none;
    color: #000;
  }
`;
