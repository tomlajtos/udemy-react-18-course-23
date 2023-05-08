import "./04-fetch-data.css";
import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(url);
        setUsers(await response.json());
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <>
      <h2>fetch data example</h2>

      <h3>github users</h3>
      <ul>
        {users.map((user) => (
          <li className="user" key={user.id}>
            <img className="avatar" src={user.avatar_url} alt={user.login} />
            <h4>{user.login}</h4>
            <a href={user.html_url}>github profile</a>
          </li>
        ))}
      </ul>
    </>
  );
};
export default FetchData;
