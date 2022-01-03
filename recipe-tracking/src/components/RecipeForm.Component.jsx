import { useRef, useState } from "react";
import { Div } from "../styled-components/RecipeForm.Styled";

export const RecipeForm = () => {
  const [formData, setFormData] = useState();

  const handleChange = (e) => {
    const [name, value] = e.target;
    setFormData([{ ...formData, [name]: value }]);
  };
  console.log(formData);
  return (
    <>
      <Div>
        <form>
          <input
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="title"
          />
          <input
            onChange={handleChange}
            type="text"
            name="ingredients"
            placeholder="ingredients"
          />
          <input
            onChange={handleChange}
            type="text"
            name="time"
            placeholder="time to cook"
          />
          <input
            onChange={handleChange}
            type="text"
            name="instructions"
            placeholder="instructions"
          />
          <div>
            <p>Upload Image: </p>
            <input type="file" name="image" />
          </div>
        </form>
      </Div>
    </>
  );
};
