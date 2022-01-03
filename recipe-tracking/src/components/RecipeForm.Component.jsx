import { useRef, useState } from "react";
import { Div } from "../styled-components/RecipeForm.Styled";

export const RecipeForm = ({ getFormData }) => {
  const [formData, setFormData] = useState();
  const pic_path = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: pic_path.current.files.length
        ? URL.createObjectURL(pic_path.current.files[0])
        : value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("hi");
    getFormData(formData);
  };

  console.log(formData);
  return (
    <>
      <Div>
        <form onSubmit={submitForm}>
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
            <input
              onChange={handleChange}
              ref={pic_path}
              type="file"
              name="image"
            />
          </div>
          <input type="submit" />
        </form>
      </Div>
    </>
  );
};