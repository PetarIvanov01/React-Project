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

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em;
  width: 100%;
  height: 100%;
`

export const CommentInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 20px;
  height: 200px;
  min-width: 500px;
  transition: 1s ease-in;

  @media (max-width:520px) {
     min-width: 300px;
     transition: 1s ease-out;
  }

  textarea {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;
  }

  button {
    background-color: #03658c;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #034669;
    }
  }
`;

export const CommentInput = styled.textarea`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
`;

export const CommentSubmitButton = styled.button`
  background-color: #03658c;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #034669;
  }
`;

export const CommentContainer = styled.div`

  margin: 0 auto 15px;
  max-width: 668px;
  min-width: 300px;
  padding: 0 10px 0 5px;
  max-height: 60vh; 
  overflow-y: auto; 

`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px

`

export const ExitButton = styled.img`
  cursor: pointer;
  margin-left: 20px;
  padding-top:5px;
  width: 35px;

`

export const CommentsList = styled.ul`
  margin-top: 30px;
  position: relative;
  min-width: 100px;

  /* &::before {
    content: '';
    width: 2px;
    height: 100%;
    background: rgba(69, 65, 67, 1);
    position: absolute;
    left: 32px;
    top: 0;
  }

  &::after {
    content: '';
    position: absolute;
    background: rgba(69, 65, 67, 1);
    bottom: 0;
    left: 27px;
    width: 7px;
    height: 7px;
    border: 3px solid rgba(69, 65, 67, 1);
    border-radius: 50%;
  } */
`;

export const CommentItem = styled.li`
  margin-bottom: 15px;
  display: block;
  position: relative;

  &::after {
    content: '';
    display: block;
    clear: both;
    height: 0;
    width: 0;
  }
`;

export const CommentMainLevel = styled.div`
  min-width: 100px;
  display: flex;
`;

export const CommentAvatar = styled.div`

  max-width: ${({ $isreply }) => ($isreply === 'true' ? '60px' : '70px')};
  max-height: ${({ $isreply }) => ($isreply === 'true' ? '55px' : '65px')};

  /* min-width: ${({ $isreply }) => ($isreply === 'true' ? '30px' : '50px')}; */
  /* min-height: ${({ $isreply }) => ($isreply === 'true' ? '30px' : '35px')}; */

  width: 60px;
  height: 55px;

  position: relative;
  z-index: 99;
  float: left;
  border: 3px solid #fff;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CommentBox = styled.div`
  width: 100%;
  max-width: ${({ $isreply }) => ($isreply === 'true' ? '610px' : '680px')};
  min-width:${({ $isreply }) => ($isreply === 'true' ? '200px' : '280px')};
  float: right;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  /* margin-left: ${({ $isreply }) => ($isreply === 'true' ? '68px' : '10px')}; */
  margin-left: 28px;
`;

export const CommentHead = styled.div`
  width: 100%;
  background: #fcfcfc;
  padding: 10px 12px;
  border-bottom: 1px solid #e5e5e5;
  overflow: hidden;
  border-radius: ${({ $isreply }) => ($isreply === 'true' ? '0 0 4px 4px' : '4px 4px 0 0')};
  display: flex;
  justify-content: space-between;
`;

export const CommentName = styled.h6`
  color: ${({ $isauthor }) => ($isauthor === 'true' ? '#03658c' : '#283035')};
  font-size: 14px;
  font-weight: 700;
  float: left;

  span {
    color: ${({ $isauthor }) => ($isauthor === 'true' ? '#03658c' : '#283035')};
  }
`;

export const CommentContent = styled.div`
  background: #fff;
  padding: 12px;
  font-size: 15px;
  color: #595959;
  border-radius: ${({ $isreply }) => ($isreply === 'true' ? '0 0 4px 4px' : '0 0 4px 4px')};
`;

export const CommentTimeStatus = styled.div`
  padding: 0 1em ;

  & > * {
    padding: 0 1em;
    display: inline-block;
  }

  & img:hover {
      transform: scale(1.05); 
  }
`