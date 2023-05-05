import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "mick",
    age: 69,
    hobby: "singing",
  });

  const displayPerson = () => {
    // setPerson({ name: "Joel", age: 33, hobby: "writing" });
    // change only one values
    // setPerson({ ...person, name: "Jean-Paul" });
  };

  return (
    <>
      <h2>useState object example</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys: {person.hobby}</h4>
      <button className="btn" type="button" onClick={displayPerson}>
        show john
      </button>
    </>
  );
};

export default UseStateObject;
