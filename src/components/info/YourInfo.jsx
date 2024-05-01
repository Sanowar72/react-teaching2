import React from "react";
const YourInfo = ({ name, age, title, parentsName }) => {
  return (
    <>
      <div>your name is :{name}</div>
      <div>Your Age is :{age}</div>
      <h2>your designation is : {title}</h2>
      <h1>your parents name is : {parentsName?.dadName?.toUpperCase()}</h1>
    </>
  );
};

export default YourInfo;
