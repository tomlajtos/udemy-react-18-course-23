import { useState } from "react";
import { data } from "../../../data.js";
import "./useState-array.css";
// const removedData = [];

const UseStateArray = () => {
  const [users, setUsers] = useState(data);
  const [removedUsers, setRemovedUsers] = useState([]);

  // handler functions, onClick
  const clearUsers = () => {
    setUsers(users.filter((user) => !user));
    setRemovedUsers(removedUsers.concat(users.filter((user) => user)));
  };
  const restoreUsers = () => {
    setRemovedUsers(removedUsers.filter((user) => !user));
    setUsers(users.concat(removedUsers.filter((user) => user)));
  };
  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setRemovedUsers(
      removedUsers.concat(users.filter((user) => user.id === id))
    );
  };
  const restoreUser = (id) => {
    setRemovedUsers(removedUsers.filter((user) => user.id !== id));
    setUsers(users.concat(removedUsers.filter((user) => user.id === id)));
  };
  return (
    <>
      <h2>useState array challenge</h2>

      <ul className="users">
        {users.map(({ id, name }) => {
          return (
            <li key={id}>
              <h3>{name}</h3>
              <p style={{ color: "lightseagreen" }}>User ID: {id}</p>
              <button
                type="button"
                className="btn"
                onClick={() => removeUser(id)}
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
        {removedUsers.map(({ id, name }) => {
          return (
            <li key={id}>
              <h3>{name}</h3>
              <p style={{ color: "lightcoral" }}>User ID: {id}</p>
              <button
                type="button"
                className="btn"
                onClick={() => restoreUser(id)}
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
