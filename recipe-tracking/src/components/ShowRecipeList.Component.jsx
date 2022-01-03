import { useState, useRef } from "react";
import { Div } from "../styled-components/ShowRecipeList.Styled";

export const ShowRecipeList = ({ data, passid }) => {
  if (!data) {
    return null;
  }
  const showInfo = (e) => {
    passid(e.target.id);
  };

  return (
    <>
      <Div>
        {data.map((el) => {
          return (
            <div key={el.nano_id} id={el.nano_id} onClick={showInfo}>
              <p>{el.title}</p>
              <p>Cooking Time: {el.time}</p>
            </div>
          );
        })}
      </Div>
    </>
  );
};
