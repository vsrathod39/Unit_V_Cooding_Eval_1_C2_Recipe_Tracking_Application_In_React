import { useState } from "react";
import { RecipeForm } from "./RecipeForm.Component";
import { ShowRecipeList } from "./ShowRecipeList.Component";

export const AppRecipeTracking = () => {
  const [list, setList] = useState([]);

  const getFormData = (data) => {
    setList([...list, data]);
    console.log("data: ", list);
  };
  return (
    <>
      <RecipeForm getFormData={getFormData} />
      <ShowRecipeList />
    </>
  );
};
