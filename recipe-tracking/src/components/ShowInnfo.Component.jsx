import { Div, Div2 } from "../styled-components/ShowInnfo.Style";

export const ShowInfo = ({ data }) => {
  if (!data) {
    return null;
  }
  return (
    <>
      <Div>
        {data.map((el) => {
          return (
            <>
              <div key={el.nano_id}>
                <p>
                  <b>Recipe Title :</b>{" "}
                  <span style={{ fontSize: "19px" }}>{el.title}</span>
                </p>
                <p>
                  <b>Recipe Ingredients :</b> <br />{" "}
                  <span style={{ fontSize: "19px" }}>{el.ingredients}</span>
                </p>
                <p>
                  <b>Recipe Instructions :</b> <br />{" "}
                  <span style={{ fontSize: "19px" }}>{el.instructions}</span>
                </p>
                <p>
                  <b>Cooking TIme :</b>{" "}
                  <span style={{ fontSize: "19px" }}> {el.time}</span>
                </p>
              </div>
            </>
          );
        })}
      </Div>
      <Div2>
        {" "}
        <img src={data[0].image} alt="" />
      </Div2>
    </>
  );
};
