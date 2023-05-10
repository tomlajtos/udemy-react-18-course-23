import { useState, useEffect } from "react";

const ShortCircuitOverview = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("Susan");
  return (
    <>
      <h3>short circuit overview</h3>
      {name && <p>Hello {name}</p>}
      <p>{text || "we need some text here..."}</p>
    </>
  );
};
export default ShortCircuitOverview;
