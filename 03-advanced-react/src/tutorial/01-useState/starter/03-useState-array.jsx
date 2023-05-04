import { useState } from "react";
import { data } from "../../../data.js";
const removedData = [];

const UseStateArray = () => {
  const [users, setUsers] = useState(data);
  const [removedUsers, setRemovedUsers] = useState(removedData);

  // handler functions, onClick
  const clearUsers = () => {
    removedData.push(...data.splice(0, data.length));
    setUsers([...data]);
  };
  return (
    <>
      <h2>useState array challenge</h2>

      <ul className="users">
        {users.map(({ id, name }) => {
          return (
            <li key={id} className="user">
              <h3>{name}</h3>
              <button
                type="button"
                className="del-btn"
              >
                click
              </button>
            </li>
          );
        })}
      </ul>
      {/*delete all*/}
      <button type="button" className="btn clear-btn" onClick={clearUsers}>
        big click
      </button>
    </>
  );
};

export default UseStateArray;
