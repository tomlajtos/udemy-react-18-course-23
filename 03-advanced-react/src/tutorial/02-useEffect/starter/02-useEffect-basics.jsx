import { useState, useEffect } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log("hello there", value);
  };

  sayHello();
  useEffect(() => {
    // 2 args: 1st callback, 2nd opt. dependency-array, 1st arg cannot be set up as async
    // however, **inside** the callback func we **can** set up an async function.
    console.log("Yay, useEffect hook in action...!");
  }, []); // if empty array, function only envoked at first render
  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default UseEffectBasics;
