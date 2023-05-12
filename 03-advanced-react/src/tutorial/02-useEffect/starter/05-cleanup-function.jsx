//TODO: figure out re-render function for 2nd component
import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const randomDelay =
    Math.round(Math.floor(Math.random() * (12000 - 1000 + 1) + 1000) / 1000) *
    1000;
  const [toggle, setToggle] = useState(false);
  const [isData, setIsData] = useState(false);
  const [showReload, setShowReload] = useState(false);
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(0);
  const [text, setText] = useState("2nd component is loading");
  let [progress, setProgress] = useState(" ");

  const loadComp = () => {
    setToggle(!toggle);
    setIsData(false);
    setProgress("");
    setDelay(randomDelay);
    setCount(0);
    showReload ? (setShowReload(false), setDelay(randomDelay)) : showReload;
  };

  const reloadComp = () => {
    // setDelay(randomDelay);
    setDelay(10000);
    setText("reloading component");
    setCount(0);
    setProgress("");
    setShowReload(false);
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
          setShowReload={setShowReload}
        />
      ) : (
        <FirstComp />
      )}
      <button className={"btn"} type="button" onClick={loadComp}>
        {toggle ? "go back" : "load next"}
      </button>
      {showReload && (
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

// examples for useEffect, setInterval, "cleanup function"
const SecondComp = ({
  count,
  setCount,
  isData,
  setIsData,
  progress,
  setProgress,
  setShowReload,
  delay,
}) => {
  // use effect will run every time the component renders, not just at initial render
  // the component mounts/unmounts on button click, basically.
  // !!! this could be problematic sometimes i.e. with setInsterval(), example below
  useEffect(() => {
    console.log("useEffect with setInterval");
    const intId = setInterval(() => {
      console.log(
        // this will run every sec, even when the component is toggled off (still runs in the bg)
        "setInterval will not stop when component is not displayed any more, unless cleanup function is set up"
      );
    }, 10000);
    // CLEANUP FUNCTION
    return () => {
      console.log(
        "%cCleanup Function: stopping the setInterval after the component is not rendered",
        "color: orange"
      );
      clearInterval(intId);
    };
  }, []);

  // fake data fetch
  useEffect(() => {
    const toutId = setTimeout(() => {
      // !isData && count < 10 ? setCount(count + 1) : isData;
      // setProgress((progress += ". "));
      if (!isData && count < 10) {
        setCount(count + 1);
        setProgress((progress += ". "));
      }
    }, 1000);

    if (count > 9) {
      setProgress("something ain't right here...try reloading the component");
      setShowReload(true);
    }

    // CLEANUP FUNCTION
    return () => {
      clearTimeout(toutId);
      console.log("%c setTimeout-1 is cleared", "color: orange");
    };
  }, [count]);
  useEffect(() => {
    console.log(delay);
    if (!isData) {
      const toutId = setTimeout(() => {
        if (delay < 10000) {
          setIsData(true);
        }
      }, delay);
      // CLEANUP FUNCTION
      return () => {
        clearTimeout(toutId);
        console.log("%c setTimeout-2 is cleared", "color: orange");
      };
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
