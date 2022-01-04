import { useState, useEffect } from "react";
import { RecipeForm } from "./RecipeForm.Component";
import { ShowRecipeList } from "./ShowRecipeList.Component";
import { ShowInfo } from "./ShowInnfo.Component";
import { Filters } from "./Filters.Component";
import { Div } from "../styled-components/AppRecipeTracking.Styled";

export const AppRecipeTracking = () => {
  const [list, setList] = useState();
  let [filterItem, setItem] = useState();
  let filterParam;

  useEffect(() => {
    setList(filterParam);
  }, [filterParam]);
  const getFormData = (data) => {
    filterParam = data;
  };
  console.log("hi");
  const shoeInfo = (id) => {
    setItem(list.filter((el) => el.nano_id === id));
  };

  const getFilter = (data) => {
    setList(data);
  };

  const goBack = () => {
    setItem(null);
  };

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
            <Filters
              className={"secound-child"}
              key={"B"}
              getFilter={getFilter}
            />
            <ShowRecipeList
              className="third-child"
              key={"C"}
              data={list}
              passid={shoeInfo}
            />
          </>
        ) : (
          <>
            <ShowInfo key={"D"} data={filterItem} goBack={goBack} />
          </>
        )}
      </Div>
    </>
  );
};
