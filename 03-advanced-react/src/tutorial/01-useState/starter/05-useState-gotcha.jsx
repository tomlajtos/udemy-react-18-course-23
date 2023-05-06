import { useState } from "react";

const UseStateGotcha = () => {
  const [number, setNumber] = useState(0);
  const clickFn = () => {
    /**
     * gotcha example:
     * setNumber(number + 1);
     * console.log(number); // useState is not sinc.,
     * // this will not log the latest value, but the one before
     */
    // solution for above problem:
    setNumber((currentState) => {
      //passing a function as an arg into 'setState'
      const newState = currentState + 1;
      console.log(newState);
      return newState; //it must return a value
    });
  };
  return (
    <>
      <h2>useState "gotcha"</h2>
      <h3>This goes up: {number}</h3>
      <button className="btn" type="button" onClick={clickFn}>
        +1
      </button>
    </>
  );
};

export default UseStateGotcha;
