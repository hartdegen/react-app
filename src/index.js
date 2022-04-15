import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import Card from "./components/Card.jsx";
import DefinitionsList from "./components/DefinitionsList.jsx";
import Progress from "./components/Progress.jsx";
import Alert from "./components/Alert.jsx";
import ListGroup from "./components/ListGroup.jsx";
import BtnGroup from './components/BtnGroup.jsx';
import Carousel from './components/Carousel.jsx';
import Collapse from './components/Collapse.jsx';
import MyForm from './components/MyForm.jsx';
import LogComponent from './components/LogComponent.jsx';

ReactDOM.render(
  <Card cardTitle="111" />,
  document.getElementById("container01")
);

const definitions = [
  { dt: "one", dd: "two", id: Math.random() },
  { dt: "another term", dd: "another description", id: Math.random() },
];
ReactDOM.render(
  <DefinitionsList data={definitions} />,
  document.getElementById("container02")
);

ReactDOM.render(
  <Progress percentage="90" />,
  document.getElementById("container03")
);

ReactDOM.render(
  <Alert type="warning" text="do you need some text?" />,
  document.getElementById("container04")
);

const dom = (
  <ListGroup>
    <p>one</p>
    <p>two</p>
  </ListGroup>
);
ReactDOM.render(dom, document.getElementById("container05"));

ReactDOM.render(
  <BtnGroup />,
  document.getElementById('container06'),
);

const images = ['/images/1.jpeg', '/images/2.jpeg', '/images/3.jpeg'];
ReactDOM.render(
  <Carousel images={images} />,
  document.getElementById('container07'),
);

ReactDOM.render(
  <Collapse text="collapse me" />,
  document.getElementById('container08'),
);

ReactDOM.render(
  <MyForm />,
  document.getElementById('container09'),
);

ReactDOM.render(
  <LogComponent />,
  document.getElementById('container10'),
);