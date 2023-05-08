import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(url);
      // const data = await response.json();
      setUsers(await response.json());
    };
    getUsers();
  }, []);

  return (
    <>
      <h2>fetch data example</h2>
      <ul>
        <h2>users list</h2>
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar_url} alt={user.login} />
            <h3>{user.login}</h3>
            <a href={user.html_url}>link</a>
          </li>
        ))}
      </ul>
    </>
  );
};
export default FetchData;
