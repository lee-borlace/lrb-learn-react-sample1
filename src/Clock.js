import React, { Component } from 'react';

class Clock extends React.Component {

    constructor(props) {
        super(props);

        // A component's state has special meaning in React. State should only hold stuff that is used in the render.
        this.state = { date: new Date() };
    }

    // Mounting happens when the component is rendered for the first time. Mounting and un-mounting are called lifecycle hooks.
    componentDidMount() {

        this.timerID = setInterval(
            () => this.tick(),
            1000
        );


    }

    // Un-mounting happens when the component is removed from the DOM. Mounting and un-mounting are called lifecycle hooks.
    componentWillUnmount() {

        clearInterval(this.timerID);

    }

    tick() {
        // Override the state. Setting the state is what tells React to re-render the component. Always use setState() - don't set state explicitly outside of the constructor.
        // setState() also has another override which takes previous state and props as params. This is because they can be updated asynchronously, with several updates batched
        // together, so the state and props you previously had might not align.
        // You can independently update the individual components of state (sub-properties) via setState() - it doesn't have to be the complete state in one go.
        this.setState({
            date: new Date()
        });
    }


    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;