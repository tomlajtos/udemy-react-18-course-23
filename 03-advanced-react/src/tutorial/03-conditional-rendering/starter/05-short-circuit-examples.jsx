import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <h2>{text || "short circuit - examples"}</h2>
      {text && (
        <div>
          <h2>hmmmmm</h2>
          <h2>{name}</h2>
        </div>
      )}
      {user && <UserComponent name={user.name} j />}
    </>
  );
};

const UserComponent = ({ name }) => {
  return <h3>{name}</h3>;
};

export default ShortCircuitExamples;
