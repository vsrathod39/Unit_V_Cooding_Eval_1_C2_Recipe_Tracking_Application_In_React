import { useState } from "react";
import { Div } from "../styled-components/ShowRecipeList.Styled";

export const ShowRecipeList = ({ data }) => {
  if (!data) {
    return null;
  }
  return (
    <>
      <Div>
        {data.map((el) => {
          return (
            <div>
              <p>{el.title}</p>
              <p>Cooking Time: {el.time}</p>
            </div>
          );
        })}
      </Div>
    </>
  );
};
