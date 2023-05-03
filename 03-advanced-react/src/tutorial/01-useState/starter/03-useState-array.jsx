import { useState } from "react";
import { data } from "../../../data.js";

const UseStateArray = () => {
  const [userData, setUserData] = useState(data);
  const clearData = () => setUserData([]);

  return (
    <>
      <h2>useState array challenge</h2>
      <ul>
        {userData.map((user) => {
          console.log(user.name);
          return (
            <li key={user.id}>
              <article>
                <h3>{user.name}</h3>
                <button type="button">click</button>
              </article>
            </li>
          );
        })}
      </ul>
      <button type="button" onClick={clearData}>
        big click
      </button>
    </>
  );
};

export default UseStateArray;
