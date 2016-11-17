import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Update this depending on the code you want to test.
startUp3();

function startUp1() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

function startUp2() {
  const element = <h1>Hello, world</h1>;
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

function startUp3() {
  function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(
      element,
      document.getElementById('root')
    );
  }

  setInterval(tick, 1000);
}

function startUp4() {
}

function startUp5() {
}

function startUp6() {
}

function startUp7() {
}

function startUp8() {
}

function startUp9() {
}

function startUp10() {
}

function startUp11() {
}

function startUp12() {
}

function startUp13() {
}