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
      <button
        style={{
          color: "red",
          height: "2rem",
          fontSize: "1rem",
          margin: "0 auto ",
          padding: "0 5px",
          width: "fit-content",
          display: "block",
          border: "black solid 2px",
          borderRadius: "10px",
        }}
        onClick={clickFn}
      >
        Click Cick Click!
      </button>
    </>
  );
};

export default UseStateBasics;
