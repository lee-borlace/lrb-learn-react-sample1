import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Clock from './Clock';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import Page from './Page';
import NameForm from './NameForm';
import FlavorForm from './FlavorForm';
import Calculator1 from './Calculator1';
import Calculator2 from './Calculator2';
import Calculator3 from './Calculator3';

// This code comes from https://facebook.github.io/react/docs/installation.html

// Update this depending on the code you want to test.
startUp19();

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

// This method uses handlers in its component.
function startUp8() {
  ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
  );
}

// Conditional rendering.
function startUp9() {

  function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }

  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  ReactDOM.render(
    // Try changing to isLoggedIn={true}:
    <Greeting isLoggedIn={true} />,
    document.getElementById('root')
  );

}

// This component uses a variable to contain a component.
function startUp10() {
  ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
  );
}

// Use of && to render conditionally.
function startUp11() {

  function Mailbox(props) {

    const unreadMessages = props.unreadMessages;

    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 &&
          <h2>
            You have {unreadMessages.length}unread messages.
        </h2>
        }
      </div>
    );
  }

  const messages = ['React', 'Re: React', 'Re:Re: React'];
  //const messages = [];

  ReactDOM.render(
    <Mailbox unreadMessages={messages} />,
    document.getElementById('root')
  );

}

// This component returns null when rendering a sub-component to force that component to not render anything.
function startUp12() {
  ReactDOM.render(
    <Page />,
    document.getElementById('root')
  );

}


// Map array of primitives to array of elements.
function startUp13() {
  const numbers = [1, 2, 3, 4, 5];

  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );

  ReactDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById('root')
  );
}

// Component which takes array as parameter, maps it to elements. Key is specified for each rendered item. Keys are not required but make rendering more efficient as modified
// items can more easily be identified. Keys should be set at the point of creating array of elements. I.e. when calling map() to create elements, create key there and then.
// The map() call can be done directly in JSX inside curly braces.
function startUp14() {
  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

  const numbers = [6, 7, 8, 9, 10];
  ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
  );

}

// Controlled component. Rather than letting the form control the textboxes inside it, we have let the value of the textbox in the form be controlled by React. This
// ensures React remains the source of truth.
function startUp15() {
  ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
  );
}

// Value of select element is used to indicate the currently selected item.
function startUp16() {
  ReactDOM.render(
    <FlavorForm />,
    document.getElementById('root')
  );
}

// First go at boiling temperature calculator with one simple input.
function startUp17() {
  ReactDOM.render(
    <Calculator1 />,
    document.getElementById('root')
  );
}

// Second go with celcius and fahrenheit temperatures which aren't kept in sync. Also because the 2 individual temperature input components inside the
// calculator component don't expose their state externally, there's no way for the parent component to make a decision based on them both.
function startUp18() {
  ReactDOM.render(
    <Calculator2 />,
    document.getElementById('root')
  );
}

// If several components need access to the same state, it is a sign that the state should be lifted up to their closest common ancestor instead.
// 
function startUp19() {
  ReactDOM.render(
    <Calculator3 />,
    document.getElementById('root')
  );
}

function startUp20() {
}

function startUp21() {
}

function startUp22() {
}

function startUp23() {
}

function startUp24() {
}

function startUp25() {
}