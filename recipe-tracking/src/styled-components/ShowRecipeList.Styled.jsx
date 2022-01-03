import styled from "styled-components";

export const Div = styled.div`
  border: 1px solid yellow;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  & div {
    border: 1px solid grey;
    border-radius: 5px;
    /* padding: 8px; */
    height: 120px;
    width: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
