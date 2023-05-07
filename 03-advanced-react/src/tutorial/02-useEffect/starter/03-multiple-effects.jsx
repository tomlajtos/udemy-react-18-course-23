import { useState, useEffect } from "react";

const MultipleEffects = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  // we can add the variable name from useState to the dependency-array
  // and when the value state changes and the coresonding component re-renders (and the also at the first render) the useEffect will run
  useEffect(() => {
    console.log("first button was clicked");
  }, [value]);

  useEffect(() => {
    console.log("second useEffect after second button click");
  }, [secondValue]);

  useEffect(() => {
    console.log("any of the two buttons triggers this useEffect function");
  }, [value, secondValue]);
  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        value
      </button>
      <h1>second value : {secondValue}</h1>
      <button className="btn" onClick={() => setSecondValue(secondValue + 1)}>
        second value
      </button>
    </div>
  );
};
export default MultipleEffects;
