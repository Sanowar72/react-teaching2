import React, { useState } from "react";
import Header from "./components/header/Header";
import Counter from "./components/counter/Counter";

const App = () => {
  const [count, setCount] = useState(10);

  // const increaseCount = () => {
  //   for (let i = 1; i <= 5; i++) {
  //     console.log("function running...");
  //     setCount((p) => p + 1);
  //   }
  // };

  return (
    <>
      <h1>this is count....{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increase count
      </button>
    </>
  );
};

export default App;
