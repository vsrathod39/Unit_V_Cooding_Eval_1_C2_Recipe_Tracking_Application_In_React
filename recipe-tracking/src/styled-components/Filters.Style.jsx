import styled from "styled-components";

export const Div = styled.div`
  grid-area: b;
  border: 2px solid grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 8px;
  width: 35vw;
  & input {
    text-align: center;
    height: 40px;
    width: 100%;
  }
  & select {
    text-align: center;
    height: 40px;
    width: 100%;
  }
`;
