import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

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
import TodoBox from './components/TodoBox.jsx';
import FunctionalComponentCard from './components/FunctionalComponentCard.jsx';
import ContextThemeSwitcher from './components/contextThemeSwitcher/Main.jsx';

ReactDOM.render(
  <Card cardTitle="111" />,
  document.getElementById("Card")
);
// or new syntax for React 18
// const container = document.getElementById('Card');
// const root = createRoot(container);
// root.render(<Card cardTitle="111" />);

const definitions = [
  { dt: "one", dd: "two", id: Math.random() },
  { dt: "another term", dd: "another description", id: Math.random() },
];
ReactDOM.render(
  <DefinitionsList data={definitions} />,
  document.getElementById("DefinitionsList")
);

ReactDOM.render(
  <Progress percentage="90" />,
  document.getElementById("Progress")
);

ReactDOM.render(
  <Alert type="warning" text="do you need some text?" />,
  document.getElementById("Alert")
);

ReactDOM.render(
  <ListGroup><p>one</p><p>two</p></ListGroup>, 
  document.getElementById("ListGroup")
);

ReactDOM.render(
  <BtnGroup />,
  document.getElementById('BtnGroup'),
);

const images = ['/images/1.jpeg', '/images/2.jpeg', '/images/3.jpeg'];
ReactDOM.render(
  <Carousel images={images} />,
  document.getElementById('Carousel'),
);

ReactDOM.render(
  <Collapse text="collapse me" />,
  document.getElementById('Collapse'),
);

ReactDOM.render(
  <MyForm />,
  document.getElementById('MyForm'),
);

ReactDOM.render(
  <LogComponent />,
  document.getElementById('LogComponent'),
);

ReactDOM.render(
  <TodoBox />,
  document.getElementById('TodoBox'),
);

ReactDOM.render(
  <FunctionalComponentCard>
    <FunctionalComponentCard.Body>
      <FunctionalComponentCard.Title>This is Functional Component</FunctionalComponentCard.Title>
      <FunctionalComponentCard.Text>/src/components/FunctionalComponentCard.jsx</FunctionalComponentCard.Text>
    </FunctionalComponentCard.Body>
  </FunctionalComponentCard>,
  document.getElementById('FunctionalComponentCard'),
);

ReactDOM.render(
  <ContextThemeSwitcher />,
  document.getElementById('ContextThemeSwitcher'),
);