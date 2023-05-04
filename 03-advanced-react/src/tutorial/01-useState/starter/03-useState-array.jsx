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
  const removeUser = (i) => {
    removedData.push(...data.splice(i, 1));
    setUsers([...data]);
  };
  return (
    <>
      <h2>useState array challenge</h2>

      <ul className="users">
        {users.map(({ id, name }, index) => {
          return (
            <li key={id} className="user">
              <h3>{name}</h3>
              <button
                type="button"
                className="del-btn"
                onClick={() => removeUser(index)}
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
