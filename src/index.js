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

ReactDOM.render(
  <Alert type="warning" text="do you need some text?" />,
  document.getElementById("container4")
);

const dom = (
  <ListGroup>
    <p>one</p>
    <p>two</p>
  </ListGroup>
);
ReactDOM.render(dom, document.getElementById("container5"));

ReactDOM.render(
  <BtnGroup />,
  document.getElementById('container6'),
);

const images = ['/images/1.jpeg', '/images/2.jpeg', '/images/3.jpeg'];
ReactDOM.render(
  <Carousel images={images} />,
  document.getElementById('container7'),
);

ReactDOM.render(
  <Collapse text="collapse me" />,
  document.getElementById('container8'),
);

ReactDOM.render(
  <MyForm />,
  document.getElementById('container9'),
);
