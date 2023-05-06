import { useState } from "react";

const UseStateSetTimeOut = () => {
  const [number, setNumber] = useState(0);
  const clickFn = () => {
    /** setTimeout(() => {
      console.log("click"); // shows if the button was clicked
      setNumber(number + 1);
      console.log(number); // log 0 no matter of button clicks
    }, 2000); */
    setTimeout(() => {
      console.log("CLICK");
      setNumber((currentNumber) => {
        const newNumber = currentNumber + 1;
        console.log(newNumber);
        return newNumber;
      });
    }, 2000); //after two sec this will increase the number by the number of button clicks
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

export default UseStateSetTimeOut;
