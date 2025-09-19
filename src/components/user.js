import { use, useState } from "react";
import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  return (
    <div className="user-info">
      <h1>count={count}</h1>
      <h1>Name: {name}</h1>
      <h2>Location: Ghazibad</h2>
      <h3>Contact: 123@gmail.com</h3>
    </div>
  );
};
export default User;
