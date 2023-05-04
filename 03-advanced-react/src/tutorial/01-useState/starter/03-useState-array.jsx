import { useState } from "react";
import { data } from "../../../data.js";
import "./useState-array.css";
const removedData = [];

const UseStateArray = () => {
  const [users, setUsers] = useState(data);

  // handler functions, onClick
  const clearUsers = () => {
    removedData.push(...data.splice(0, data.length));
    setUsers([...data]);
  };
  const restoreUsers = () => {
    data.push(...removedData.splice(0, removedData.length));
    setUsers([...data]);
  };
  const removeUser = (i) => {
    removedData.push(...data.splice(i, 1));
    setUsers([...data]);
  };
  const restoreUser = (i) => {
    data.push(...removedData.splice(i, 1));
    setUsers([...data]);
  };
  return (
    <>
      <h2>useState array challenge</h2>

      <ul className="users">
        {users.map(({ id, name }, index) => {
          return (
            <li key={id}>
              <h3>{name}</h3>
              <p style={{ color: "lightseagreen" }}>User ID: {id}</p>
              <button
                type="button"
                className="btn"
                onClick={() => removeUser(index)}
              >
                remove
              </button>
            </li>
          );
        })}
      </ul>
      {/*delete all*/}
      <button type="button" className="clr-all-btn" onClick={clearUsers}>
        remove all
      </button>

      <hr className="hr" />

      <ul className="users removedUsers">
        {removedData.map(({ id, name }, index) => {
          return (
            <li key={id}>
              <h3>{name}</h3>
              <p style={{ color: "lightcoral" }}>User ID: {id}</p>
              <button
                type="button"
                className="btn"
                onClick={() => restoreUser(index)}
              >
                restore
              </button>
            </li>
          );
        })}
      </ul>
      <button type="button" className="res-all-btn" onClick={restoreUsers}>
        restore all
      </button>
    </>
  );
};

export default UseStateArray;
