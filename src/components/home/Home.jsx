import React from "react";
import homeStyles from "./Home.module.css";
import About from "../about/About";
import YourInfo from "../info/YourInfo";
const Home = () => {
  const employeeDetail = [
    {
      name: "John Doe",
      title: "Software Engineer",
      age: 20,
      parentsName: {
        momName: "shanggyoj",
      },
    },
    {
      name: "sanowar",
      title: "tester",
      age: 25,
    },
    {
      name: "megha",
      title: "devops",
      age: 45,
      parentsName: {
        dadName: "vijay kumar",
        momName: "nh pta",
      },
    },
    { name: "astha", title: "java deve", age: 25 },
    {
      name: "svb",
      age: 45,
      title: "yugihdoqh",
      parentsName: {
        dadName: "76y808677",
        momName: "6ty98uy",
      },
    },
    {
      name: "svb",
      age: 45,
      title: "yugihdoqh",
      parentsName: {
        dadName: "76y808677",
        momName: "6ty98uy",
      },
    },
    {
      name: "svb",
      age: 45,
      title: "yugihdoqh",
      parentsName: {
        dadName: "76y808677",
        momName: "6ty98uy",
      },
    },
    {
      name: "svb",
      age: 45,
      title: "yugihdoqh",
      parentsName: {
        dadName: "76y808677",
        momName: "6ty98uy",
      },
    },
  ];
  return (
    <>
      <h3>this is employee detail</h3>
      {employeeDetail.map((ele, index) => {
        const { name, title, age, parentsName } = ele;
        return (
          <YourInfo
            name={name}
            age={age}
            title={title}
            key={index}
            parentsName={parentsName}
          />
        );
      })}
    </>
  );
};

export default Home;
