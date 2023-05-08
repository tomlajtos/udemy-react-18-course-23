import { useEffect, useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(user);
  return (
    <>
      <h2>Fetch Data </h2>
      <div></div>
    </>
  );
};
export default MultipleReturnsFetchData;
