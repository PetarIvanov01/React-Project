import Select from "react-select";
import { styled } from "styled-components";

export const FormContainerStyle = styled.div`

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%); 

    background-color: #F9F3F3;
    opacity: 90%;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 6px 6px 4px 0px rgba(0, 0, 0, 0.3),inset 0px 3px 3px 0px rgba(0, 0, 0, 0.3);
    min-height: 250px;
    min-width: 400px;
    transition: all 0.3s ease-in-out; 
    
    & h2 {
        text-align: center;
        margin-bottom: 20px;
    }

    & label,input,textarea {
        display: block;
        width: 100%;
        margin-bottom: 15px;
    }
    
    & input{
        height: 2em;
    }

    & .category {
      text-align: center;
    }

    & textarea {
        max-width: 100%;
        max-height: 300px;
        resize: none;
        background-color: #D1C8C8;
        opacity: 55%;
    }

    @media (max-width:500px) {
        min-width: 300px;
        transition: all 0.3s ease-in-out; 
    }
`

export const ProfileFormStyle = styled`
  background-color: #F9F3F3;
    opacity: 90%;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 6px 6px 4px 0px rgba(0, 0, 0, 0.3),inset 0px 3px 3px 0px rgba(0, 0, 0, 0.3);
    min-height: 250px;
    min-width: 400px;

    display: flex;
    flex-direction: column;
    align-items: center;

    & form {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    & h2 {
        text-align: center;
        width: 275px;
        margin-bottom: 1.5em;
    }
`

export const AvatarSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  & textarea {
    min-width: 250px;
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
  margin: 0.7em 0;
}

`
