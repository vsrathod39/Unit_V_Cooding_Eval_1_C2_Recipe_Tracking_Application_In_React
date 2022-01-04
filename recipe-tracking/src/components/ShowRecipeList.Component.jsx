import { useEffect, useState } from "react";
import { Div } from "../styled-components/ShowRecipeList.Styled";

export const ShowRecipeList = ({ data, passid }) => {
  const [allData, setAllData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchData(`http://localhost:3000/users`);
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
            <div
              style={{
                backgroundImage: `url(${el.image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              key={el.nano_id}
              id={el.nano_id}
              onClick={showInfo}
            >
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
