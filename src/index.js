import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import Card from "./components/Card.jsx";
import DefinitionsList from "./components/DefinitionsList.jsx";
import Progress from "./components/Progress.jsx";

ReactDOM.render(
  <Card cardTitle="111" />,
  document.getElementById("container1")
);

const definitions = [
  { dt: "one", dd: "two", id: Math.random() },
  { dt: "another term", dd: "another description", id: Math.random() },
];
ReactDOM.render(
  <DefinitionsList data={definitions} />,
  document.getElementById("container2")
);

ReactDOM.render(
  <Progress percentage="90" />,
  document.getElementById("container3")
);
