import { useState, useEffect } from "react";

const ToggleChallenge = () => {
  const [isRendered, setIsRendered] = useState(false);
  // const handleClick = () => {
  //   !isRendered ? setIsRendered(true) : setIsRendered(false);
  // };

  return (
    <>
      <h2>toggle challenge</h2>
      <button
        className={"btn"}
        type="button"
        onClick={() => setIsRendered(!isRendered)}
      >
        toggle component
      </button>
      {isRendered && <TestComponent />}
    </>
  );
};

const TestComponent = () => {
  return (
    <div
      style={{
        margin: "30px auto",
        padding: "5px",
        width: "fit-content",
        border: "8px solid #6131ff",
        borderRadius: "25px",
      }}
    >
      <h2
        style={{
          margin: "auto",
          padding: "20px",
          width: "fit-content",
          color: "#efefef",
          backgroundColor: "#6131ff",
          border: "1px solid #cfcfcf",
          borderRadius: "15px",
        }}
      >
        This component renders on button click
      </h2>
    </div>
  );
};

export default ToggleChallenge;
