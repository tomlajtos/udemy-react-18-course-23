import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const clickFn = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h2>useState basics</h2>;
      <h3 style={{ color: "navy" }}>Num of clicks: {count}</h3>
      <button className="btn" type="button" onClick={clickFn}>
        Click Cick Click!
      </button>
    </>
  );
};

export default UseStateBasics;
