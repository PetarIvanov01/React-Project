import { Link } from "react-router-dom";
import styled from "styled-components";

export const NoCommentsMessage = styled.h1`
  font-size: 18px;
  color: #555;
  margin-top: 20px;
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

export const NoUserMessage = styled.div`
  font-size: 18px;
  color: #555;
  text-align: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

export const RegisterLink = styled(Link)`
  color: #03658c;
  text-decoration: underline;
  cursor: pointer;
`;