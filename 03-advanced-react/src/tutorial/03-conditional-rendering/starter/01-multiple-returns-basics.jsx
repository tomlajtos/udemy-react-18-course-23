import { useEffect, useState } from "react";

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      console.log("done fetching the data");
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>Multiple Returns Basics</h2>
      <div>yo</div>
    </>
  );
};
export default MultipleReturnsBasics;
