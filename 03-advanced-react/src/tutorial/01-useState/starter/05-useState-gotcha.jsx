import { useState } from "react";

const UseStateGotcha = () => {
  const [number, setNumber] = useState(0);
  const clickFn = () => {
    setNumber(number + 1);
    console.log(number); // useState is not sinc.,
    // this will not log the latest value, but the one before
  };
  return (
    <>
      <h2>useState "gotcha"</h2> <p>This goes up: {number}</p>
      <button className="btn" type="button" onClick={clickFn}>
        +1
      </button>
    </>
  );
};

export default UseStateGotcha;
