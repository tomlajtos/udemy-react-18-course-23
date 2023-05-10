import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "Dave" });
  const [isEditing, setIsEditing] = useState(true);

  return (
    <>
      <hr style={{ margin: "20px auto" }} />
      <h2>{text || "short circuit - examples"}</h2>
      <hr style={{ margin: "20px auto" }} />
      {text && (
        <div>
          <h2>hmmmmm</h2>
          <h2>{name}</h2>
        </div>
      )}
      {user && <UserComponent name={user.name} />}
      <hr style={{ margin: "20px auto" }} />
      <h2>ternary operator example</h2>
      <button className={"btn"} type="button">
        {isEditing ? "edit" : "add"}
      </button>
      <hr style={{ visibility: "hidden", margin: "20px auto" }} />
      {user ? (
        <div>
          <h4>Hello there {user.name}</h4>
        </div>
      ) : (
        <div>
          <h2>Please login</h2>
        </div>
      )}
    </>
  );
};

const UserComponent = ({ name }) => {
  return <h3>{name}</h3>;
};

export default ShortCircuitExamples;
