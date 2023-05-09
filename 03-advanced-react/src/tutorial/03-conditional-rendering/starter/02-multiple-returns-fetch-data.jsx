import { useEffect, useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        console.log(response);
        if (!response.ok) {
          // solution for fetch not treating 4.. and 5.. codes as errors (or use Axios)
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const data = await response.json();
        console.log(data);
        setUser(data);
      } catch (error) {
        //fetch will not throw error when response status is 4.. or 5.. (i.e. 404)
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    })();
  }, []);

  /** REMINDER : Order Matters !!!
   * code is executed top to bottom so condition for isLoading
   * should come before the jsx.
   */

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }
  console.log(user);
  return (
    <>
      <article
        style={{
          margin: "50px auto",
          width: "350px",
          height: "450px",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "20px",
        }}
      >
        <img
          style={{ marginBottom: "20px", width: "120px", borderRadius: "15px" }}
          src={user.avatar_url}
          alt={user.name}
        />
        <h2>{user.name}</h2>
        <p style={{ fontSize: "1.25rem" }}>works at: {user.company}</p>
        <p>{user.bio}</p>
      </article>
    </>
  );
};
export default MultipleReturnsFetchData;
