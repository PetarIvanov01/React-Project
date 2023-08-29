import Select from "react-select";
import { styled } from "styled-components";

export const AvatarSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & input{
  border: 1px solid #ccc;
  }
  
`;

export const AvatarImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid #ccc;
`;

export const CustomSelect = styled(Select)`
  width: 200px;
  margin-bottom: 15px;
`;