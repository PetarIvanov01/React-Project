import styled from "styled-components";

export const CommentButton = styled.div`
    display: flex;
    justify-content: center;
    cursor: pointer;
  
    position: relative;
    img {
        display: block;
        width: 20px;
    }

    &:hover {
        transform: scale(1.05); 
    }
`

export const CommentInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  background-color: #f7f7f7; 
  border: 1px solid #ddd; 
  border-radius: 10px; 
  margin-bottom: 20px;
  margin-left: 5px;
  width: 90%;
  max-width: 500px; 
  transition: 0.5s ease-in-out;  
  background-color: rgba(237, 206, 184, 0.61);

  h1 {
    font-size: 24px;
    color: rgba(163, 122, 110, 1);
    margin-bottom: 10px;
    font-family: 'cursive';
  }
  
`;

export const CommentInput = styled.textarea`
  width: 100%;
  margin-bottom: 10px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px; 
  resize: none;
  font-size: 16px;
  color: #333;
  opacity: 0.9;

  &:focus {
    border-color: #008a82; 
  }
`;

export const CommentSubmitButton = styled.button`
 
  background-color: #6B6B6B;
  color: rgba(237, 206, 184, 1);
  padding: 6px 8px; 
  border: none;
  font-size: 1em;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'cursive';
  
  &:hover {
    background-color: #034669;
  }
`;



