import styled from "styled-components";

export const Div = styled.div`
  grid-area: c;
  border: 2px solid grey;
  width: 100%;
  height: 220px;
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  & div {
    border: 1px solid grey;
    border-radius: 5px;
    /* padding: 8px; */
    height: 140px;
    width: 19%;
    font-size: 20px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
