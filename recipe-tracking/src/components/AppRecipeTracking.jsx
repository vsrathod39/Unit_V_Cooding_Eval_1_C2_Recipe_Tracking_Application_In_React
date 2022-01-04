import { useState, useEffect } from "react";
import { RecipeForm } from "./RecipeForm.Component";
import { ShowRecipeList } from "./ShowRecipeList.Component";
import { ShowInfo } from "./ShowInnfo.Component";
import { Filters } from "./Filters.Component";
import { Div } from "../styled-components/AppRecipeTracking.Styled";

export const AppRecipeTracking = () => {
  const [list, setList] = useState();
  let [filterItem, setFilterItem] = useState();
  let filterParam;

  useEffect(() => {
    setList(filterParam);
  }, [filterParam]);
  const getFormData = (data) => {
    console.log("hi");
    setList(data);
  };

  const fetchData = async (link) => {
    console.log("hi");
    try {
      let res = await fetch(link);
      res = await res.json();
      setFilterItem(res);
    } catch (error) {}
  };
  const shoeInfo = (id) => {
    fetchData(`http://localhost:3000/users?nano_id=${id}`);
  };
  const goBack = () => {
    setFilterItem(null);
  };

  const getFilter = (data) => {
    setList(data);
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
