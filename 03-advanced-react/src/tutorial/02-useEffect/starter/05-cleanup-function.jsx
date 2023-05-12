//TODO: figure out re-render function for 2nd component
import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  const [isData, setIsData] = useState(false);
  const [reload, setReload] = useState(false);
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(10000);
  const [text, setText] = useState("2nd component is loading");
  let [progress, setProgress] = useState(" ");

  const loadComp = () => {
    setToggle(!toggle);
  };

  const reloadComp = () => {
    setDelay(3000); //this is not working properly... hence TODO
    setText("reloading component");
    setCount(0);
    setProgress("");
    setReload(false);
  };

  return (
    <>
      <h2>cleanup function </h2>
      <hr style={{ margin: "20px auto" }} />
      {!isData && toggle && (
        <div>
          <h2>{text}</h2>
          <h3>
            <span style={{ visibility: "hidden" }}>[</span>
            {progress}
            <span style={{ visibility: "hidden" }}>]</span>
          </h3>
        </div>
      )}
      {toggle ? (
        <SecondComp
          isData={isData}
          setIsData={setIsData}
          count={count}
          setCount={setCount}
          progress={progress}
          setProgress={setProgress}
          delay={delay}
          setReload={setReload}
        />
      ) : (
        <FirstComp />
      )}
      <button className={"btn"} type="button" onClick={loadComp}>
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
          onClick={reloadComp}
        >
          reload
        </button>
      )}
    </>
  );
};

const FirstComp = () => {
  return <h2>This is component 1</h2>;
};

const SecondComp = ({
  count,
  setCount,
  isData,
  setIsData,
  progress,
  setProgress,
  setReload,
  delay,
}) => {
  // use effect will run every time the component renders, not just at initial render
  // the component mounts/unmounts on button click, basically.
  // fake data fetch
  useEffect(() => {
    setTimeout(() => {
      // !isData && count < 10 ? setCount(count + 1) : isData;
      // setProgress((progress += ". "));
      if (!isData && count < 10) {
        setCount(count + 1);
        setProgress((progress += ". "));
      }
    }, 800);

    if (count > 9) {
      setProgress("something ain't right here...try reloading the component");
      setReload(true);
    }
  }, [count]);
  useEffect(() => {
    if (!isData) {
      setTimeout(() => {
        if (delay < 10000) {
          setIsData(true);
        }
      }, delay);
    }
  }, [delay]);

  return <>{isData && count < 10 && <Data />}</>;
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
