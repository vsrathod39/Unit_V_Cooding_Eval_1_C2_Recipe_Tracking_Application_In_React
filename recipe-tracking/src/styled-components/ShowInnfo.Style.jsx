import styled from "styled-components";

export const Div = styled.div`
  border: 1px solid grey;
  width: 100%;
  padding: 8px;
  display: flex;
  justify-content: center;
  gap: 12px;
  & div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const Div2 = styled.div`
  grid-area: b;
  width: 100%;
  & img {
    width: 100%;
    height: 420px;
  }
`;
