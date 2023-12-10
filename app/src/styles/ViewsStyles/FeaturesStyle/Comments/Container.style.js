import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em;
  width: 95%;
  height: 80vh;
  padding: 1em 0;

  background: linear-gradient(to bottom, rgba(190, 173, 162, 0.4), rgba(192, 192, 192, 0.8));
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
`