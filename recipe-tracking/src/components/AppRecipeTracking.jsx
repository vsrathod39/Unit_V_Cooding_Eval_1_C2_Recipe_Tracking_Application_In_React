import { useState } from "react";
import { RecipeForm } from "./RecipeForm.Component";
import { ShowRecipeList } from "./ShowRecipeList.Component";
import { ShowInfo } from "./ShowInnfo.Component";
import { Filters } from "./Filters.Component";
import { Div } from "../styled-components/AppRecipeTracking.Styled";

export const AppRecipeTracking = () => {
  const [list, setList] = useState([]);
  let [filterItem, setItem] = useState();
  const getFormData = (data) => {
    setItem();
    setList([...list, data]);
  };

  const shoeInfo = (id) => {
    setItem(list.filter((el) => el.nano_id === id));
  };
  console.log(list);
  return (
    <>
      <Div className="recipe-app">
        {!filterItem ? (
          <>
            <RecipeForm
              className="first-child"
              key={"A"}
              getFormData={getFormData}
            />
            <Filters className={"secound-child"} key={"B"} />
            <ShowRecipeList
              className="third-child"
              key={"C"}
              data={list}
              passid={shoeInfo}
            />
          </>
        ) : (
          <>
            <ShowInfo key={"D"} data={filterItem} />
          </>
        )}
      </Div>
    </>
  );
};
