// set up counter without state hook and see nothing happenig
// used inline styles because of me being lazy
const ErrorExample = () => {
  let count = 0;
  const clickFn = () => {
    count += 1;
    console.log(count);
  };
  return (
    <>
      <h2>useState error example</h2>
      <h3 style={{ color: "navy" }}>Num of clicks: {count}</h3>
      <button
        style={{
          color: "red",
          height: "2rem",
          fontSize: "1rem",
          margin: "0 auto ",
          padding: "0 5px",
          width: "fit-content",
          display: "block",
          border: "black solid 2px",
          borderRadius: "10px",
        }}
        onClick={clickFn}
      >
        Click me daddy!
      </button>
    </>
  );
};

export default ErrorExample;
