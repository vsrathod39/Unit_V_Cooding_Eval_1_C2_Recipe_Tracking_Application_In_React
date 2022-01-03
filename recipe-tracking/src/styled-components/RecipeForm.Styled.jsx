import styled from "styled-components";
export const Div = styled.div`
  border: 1px solid blue;
  width: 30vw;
  & form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    & input {
      width: 100%;
      height: 40px;
      text-align: center;
      font-size: 16px;
      outline: none;
    }
    & div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      & input {
        width: 60%;
      }
    }
  }
`;
