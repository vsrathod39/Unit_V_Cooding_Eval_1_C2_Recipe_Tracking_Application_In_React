import { useState } from "react";
import { Div } from "../styled-components/Filters.Style";

export const Filters = ({ getFilter }) => {
  const [filter, setFilter] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const applyFilter = () => {
    filter.filterState = true;
    getFilter(filter);
  };

  return (
    <>
      <Div>
        <div>
          <input
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="title"
          />
        </div>
        <div>
          <select onChange={handleChange} name="time">
            <option value="">-- cookin time --</option>
            <option value="30">30 min</option>
            <option value="60">60 mi</option>
            <option value="90">90 min</option>
          </select>
        </div>
        <div>
          <button onClick={applyFilter}>Apply</button>
        </div>
      </Div>
    </>
  );
};
