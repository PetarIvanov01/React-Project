import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    max-width: 60%;
    text-align: center;
    padding: 50px;
    background-color: rgba(196, 154, 9, 0.39); 
    border: 1px solid #f5c6cb; 
    border-radius: 8px;

    @media (max-width:600px) {
    font-size: 12px;
  }
`

export const Heading = styled.h1`
  font-size: 3em;
  color: #e44d26; 
  margin-bottom: 0.5em;
`;

export const Message = styled.p`
  font-size: 1.2em;
  color: black;
  margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  font-size: 1.2em;
  color: #007bff; 
  text-decoration: underline;
`;

export const ResetButton = styled.button`
  font-size: 1.2em;
  padding: 10px 20px;
  background-color: rgba(141, 152, 52, 0.87); 
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  transition: color 0.3s ease;

  &:hover {
    background-color: rgba(160, 195, 145, 0.8); 
    color: black;
  }
`;