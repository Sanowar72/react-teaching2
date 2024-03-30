import React, { useState } from "react";

function Counter() {
  const [age, setAge] = useState(66);

  const incrementAge = () => {
    setAge(age + 1);
  };
  return (
    <>
      <div>your age is : {age}</div>
      <button onClick={incrementAge}>increase age</button>
    </>
  );
}

export default Counter;
