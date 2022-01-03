import { Div } from "../styled-components/Filters.Style";

export const Filters = () => {
  return (
    <>
      <Div>
        <div>
          <input type="text" name="title" placeholder="title" />
        </div>
        <div>
          <select name="time">
            <option value="">-- cookin time --</option>
            <option value="30">30 min</option>
            <option value="60">60 mi</option>
            <option value="90">90 min</option>
          </select>
        </div>
        <div>
          <button>Apply</button>
        </div>
      </Div>
    </>
  );
};
