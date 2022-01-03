import { useRef, useState } from "react";
import { nanoid } from "nanoid";
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
    formData.nano_id = nanoid();
    getFormData(formData);
  };

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
            type="number"
            name="time"
            placeholder="time to cook in minute"
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
