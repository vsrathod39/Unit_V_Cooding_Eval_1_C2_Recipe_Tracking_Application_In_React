import { useEffect, useState } from "react";
import { Div } from "../styled-components/ShowRecipeList.Styled";

export const ShowRecipeList = ({ data, passid }) => {
  const [allData, setAllData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchData("http://localhost:3000/users");
    if (data) {
      filter();
    }
  }, [data]);

  const fetchData = async (link) => {
    setIsLoading(true);
    try {
      let res = await fetch(link);
      res = await res.json();
      setAllData(res);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(data);
  const filter = async () => {
    try {
      if (data) {
        if (data?.title && data?.title && data.length) {
          let res = await fetchData(
            `http://localhost:3000/users?title<=${data.title}&time&`
          );
          res = await res.json();
          setAllData(res);
        }
      }
    } catch (error) {}
  };

  const showInfo = (e) => {
    passid(e.target.id);
  };

  return isLoading ? (
    <Div>...Loading</Div>
  ) : isError ? (
    <Div>Something went wrong</Div>
  ) : allData.length > 0 ? (
    <>
      <Div>
        {allData.map((el) => {
          return (
            <div key={el.nano_id} id={el.nano_id} onClick={showInfo}>
              <p>{el.title}</p>
              <p>Cooking Time: {el.time}</p>
            </div>
          );
        })}
      </Div>
    </>
  ) : (
    <Div>No data...</Div>
  );
};
