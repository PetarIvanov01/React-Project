import Select from "react-select";
import { styled } from "styled-components";

export const AvatarSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & input, textarea{
  border: 1px solid #ccc;
  margin-top: 0.5em;
  }

  button {
    display: block;
    margin: 0 auto;
  }

  textarea {
    max-width: 220px;
  }
  
`;

export const AvatarImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #ccc;
`;


export const CustomSelect = styled(Select)`
  margin-bottom: 15px;
`;

export const CustomCategorySelect = styled.div`

display: flex;
align-items: center;
gap: 2em;

label,input {
  text-align: center;
}

`
