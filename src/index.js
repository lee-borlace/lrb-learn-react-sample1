import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Clock from './Clock';

// This code comes from https://facebook.github.io/react/docs/installation.html

// Update this depending on the code you want to test.
startUp7();

function startUp1() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

function startUp2() {
  const element = <h1>Helloooo, world</h1>;
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

// Every time you call render again it only updates the parts of the DOM which have actually changed.
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

// Any attributes passed to a custom component are consumed via the props arg. 
function startUp4() {

  function MyComponent(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  const element = <MyComponent name="John Johnson" />;

  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}


// Components can be composed from other components.
function startUp5() {

  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  function App3() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }

  ReactDOM.render(
    <App3 />,
    document.getElementById('root')
  );
}



// Example of breaking down a component into lots of sub-components, each with a relatively small scope, and being more re-usable. 
// We recommend naming props from the component's own point of view rather than the context in which it is being used.
function startUp6() {

  function Avatar(props) {
    return (
      <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
        />
    );
  }


  function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
    );
  }


  function Comment(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }

  function formatDate(date) {
    return date.toLocaleDateString();
  }

  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
  };


  ReactDOM.render(
    <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author} />,
    document.getElementById('root')
  );

}


// This method uses a custom component defined in a class which has internal state.
function startUp7() {
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );

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