import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const increaseOne = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>this is count value {count}</h1>
      <button onClick={increaseOne}>add one</button>
      <button onClick={() => setCount(0)}>reset to 0</button>
      <button
        onClick={() => {
          setCount((pre) => {
            if (pre > 0) {
              return pre - 1;
            } else {
              return 0;
            }
          });
        }}
      >
        substract one
      </button>
    </>
  );
};

export default App;
