import styled from "styled-components"

export const InputField = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;

        & input {
            background-color: #D1C8C8;
            opacity: 55%;
            min-width: 200px;
            padding: 10px 10px;
            transition: border-color 0.3s ease; 

            &:hover,
            &:focus {
                border-color: #A9826F; 
            }
        }

        ::placeholder{
            font-size: 1.2em;
            text-align: center;
            color: #000000;
            opacity: 65%;
        }
`
export const ButtonStyle = styled.div`
    
        display: flex;
        justify-content: center; 
        align-items: flex-end; 

    & button {
        background-color: #C5A78F;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease; 

        &:hover {
          background-color: #A9826F; 
        }
    } 
    
`

export const TextArea = styled.div`
        ::placeholder{
            font-size: 1.2em;
            text-align: center;
            color: #000000;
            opacity: 65%;
        }
        
        & textarea {
            padding: 10px 10px;
            resize: none;
            width: 100%;
            min-height: 140px;
            background-color: #D1C8C8;
            opacity: 55%;

            &:hover,
            &:focus {
            border-color: #A9826F; 
            }
        }
`