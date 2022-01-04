import { useRef, useState } from "react";
import { nanoid } from "nanoid";
import { Div } from "../styled-components/RecipeForm.Styled";

export const RecipeForm = ({ getFormData }) => {
  const [formData, setFormData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
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

  const submitForm = async (e) => {
    e.preventDefault();
    formData.nano_id = nanoid();
    formData.image = await getImage();
    handleReset();
    const payload = formData;
    setIsLoading(true);
    try {
      let res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      res = await res.json();
      console.log(res);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
    getFormData(Math.random() * 1000);
  };

  const getImage = async () => {
    let res = await fetch("https://foodish-api.herokuapp.com/api/");
    let data = await res.json();
    return data.image;
  };

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  };

  return isLoading ? (
    <Div>...Loading </Div>
  ) : isError ? (
    <Div>Something went wrong</Div>
  ) : (
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
