import styled from "styled-components";

export const Div = styled.div`
  border: 2px solid grey;
  padding: 5px;
  display: grid;
  grid-gap: 12px;
  width: 100%;
  grid-template-columns: 49.5% 49.5%;
  grid-template-areas:
    "a b"
    "c c";
`;
