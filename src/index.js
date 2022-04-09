import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Card from './components/Card.jsx';

ReactDOM.render(
  <Card cardTitle="111" text="some text here"/>,
  document.getElementById('container1'),
);
ReactDOM.render(
  <Card cardTitle="222"/>,
  document.getElementById('container2'),
);