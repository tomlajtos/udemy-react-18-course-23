import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [isLoading, setIsLoading] = useState(false);
  const load = () => {
    setIsLoading(!isLoading);
  };

  return (
    <>
      <h2>cleanup function</h2>
      <hr style={{ margin: "20px auto" }} />
      {isLoading ? <SecondComp /> : <FirstComp />}
      <button className={"btn"} type="button" onClick={load}>
        {isLoading ? "go back" : "load next"}
      </button>
    </>
  );
};

const FirstComp = () => {
  return <h2>This is component 1</h2>;
};

const SecondComp = () => {
  const [text, setText] = useState("2nd component is loading...");

  // use effect will run every time the component renders, not just at initial render
  // the component mounts/unmounts on button click, basically
  useEffect(() => {
    console.log("useEffect...");
  }, []);
  return (
    <>
      <h2>{text}</h2>
    </>
  );
};

export default CleanupFunction;
