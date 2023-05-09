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
        const data = await response.json();
        setUser(data);
      } catch (error) {
        //fetch will not throw when it is 404
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

  return (
    <>
      <h2>Fetch Data </h2>
      <div></div>
    </>
  );
};
export default MultipleReturnsFetchData;
