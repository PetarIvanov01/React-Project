import styled from "styled-components";

export const CommentContainer = styled.div`

  margin: 0 auto;
  max-width: 668px;
  width:100%;
  padding: 0 10px 0 5px;
  max-height: 60vh;
  overflow-y: auto;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 23px rgba(0, 0, 0, 0.2);
  }
`;

export const CommentsList = styled.ul`
  margin-top: 30px;
  position: relative;
  min-width: 100px;
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

  min-width: ${({ $isreply }) => ($isreply === 'true' ? '30px' : '50px')};
  min-height: ${({ $isreply }) => ($isreply === 'true' ? '30px' : '35px')};

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

  background-color: rgba(237, 206, 184, 0.61);
`;

export const CommentName = styled.h6`
  color: ${({ $isauthor }) => ($isauthor === 'true' ? '#008a82' : '#283035')};
  font-size: 14px;
  font-weight: 700;
  float: left;

  span {
    color: ${({ $isauthor }) => ($isauthor === 'true' ? '#008a82' : '#283035')};
  }
`;

export const CommentContent = styled.div`
  background: #fff;
  opacity: 0.9;
  padding: 12px;
  font-size: 15px;
  color: #595959;
  border-radius: ${({ $isreply }) => ($isreply === 'true' ? '0 0 4px 4px' : '0 0 4px 4px')};
`;

export const CommentTimeStatus = styled.div`

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-wrap:wrap;
  width: 100%;
  gap: 1em;

  & img:hover {
      transform: scale(1.05); 
  }
`

export const Controllers = styled.div`
  display: flex;
  align-items: center;
  
  img {
    width: 30px;
    height: 32px;
  }
  .reply {
    width: 28px;
    height: 30px;
  }
`