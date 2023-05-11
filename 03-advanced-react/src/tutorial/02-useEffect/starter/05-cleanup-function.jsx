//TODO: figure out re-render function for 2nd component
import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  const [reload, setReload] = useState(false);
  const [text, setText] = useState("2nd component is loading");
  const [delay, setDelay] = useState(9000);

  const load = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <h2>cleanup function</h2>
      <hr style={{ margin: "20px auto" }} />
      {toggle ? (
        <SecondComp setReload={setReload} delay={delay} text={text} />
      ) : (
        <FirstComp />
      )}
      <button className={"btn"} type="button" onClick={load}>
        {toggle ? "go back" : "load next"}
      </button>
      {reload && (
        <button
          className="btn"
          style={{
            backgroundColor: "orange",
            fontWeight: "800",
            marginLeft: "10px",
          }}
          type="button"
          onClick={() => {
            setDelay(1000); //this is not working properly... hence TODO
            setText("reloading component");
            setReload(false);
          }}
        >
          {" "}
          reload
        </button>
      )}
    </>
  );
};

const FirstComp = () => {
  return <h2>This is component 1</h2>;
};

const SecondComp = ({ setReload, delay, text }) => {
  const [count, setCount] = useState(0);
  const [isData, setIsData] = useState(false);
  let [progress, setProgress] = useState(". ");

  // use effect will run every time the component renders, not just at initial render
  // the component mounts/unmounts on button click, basically
  useEffect(() => {
    console.log("useEffect...");
    setTimeout(() => {
      setProgress((progress += ". "));
      !isData ? setCount(count + 1) : isData;
    }, 800);

    setTimeout(() => {
      setIsData(true);
    }, delay);

    if (count >= 10) {
      setReload(true);
    }
  }, [count, delay]);

  return (
    <>
      {!isData && count < 10 ? (
        <div>
          <h2>{text}</h2>
          <h2>{progress}</h2>
        </div>
      ) : !isData || count >= 10 ? (
        <h2>something ain't right here...refresh the browser maybe?</h2>
      ) : (
        <Data />
      )}
    </>
  );
};

// test data for fake fatch
const Data = () => {
  return (
    <div>
      <h2>This is what you've been waiting for</h2>
      <div
        style={{
          margin: "20px auto",
          width: "fit-content",
          height: "fit-content",
          border: "20px solid red",
          borderRadius: "50%",
        }}
      >
        <div
          style={{
            width: "fit-content",
            height: "fit-content",
            border: "20px solid white",
            borderRadius: "50%",
          }}
        >
          <div
            style={{
              width: "fit-content",
              height: "fit-content",
              border: "20px solid red",
              borderRadius: "50%",
            }}
          >
            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                border: "20px solid white",
                borderRadius: "50%",
              }}
            >
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor: "red",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleanupFunction;
