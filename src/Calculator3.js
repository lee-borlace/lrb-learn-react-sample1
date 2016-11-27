import React, { Component } from 'react';
import TemperatureInput2 from './TemperatureInput2';


function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

class Calculator3 extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = { value: '', scale: 'c' };
    }

    handleCelsiusChange(value) {
        this.setState({ scale: 'c', value });
    }

    handleFahrenheitChange(value) {
        this.setState({ scale: 'f', value });
    }

    myIsNaN(o) {
        return o !== o;
    }

    tryConvert(value, convert) {
        const input = parseFloat(value);
        if (this.myIsNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }


    render() {
        const scale = this.state.scale;
        const value = this.state.value;
        const celsius = scale === 'f' ? this.tryConvert(value, this.toCelsius) : value;
        const fahrenheit = scale === 'c' ? this.tryConvert(value, this.toFahrenheit) : value;

        return (
            <div>
                <TemperatureInput2
                    scale="c"
                    value={celsius}
                    onChange={this.handleCelsiusChange} />
                <TemperatureInput2
                    scale="f"
                    value={fahrenheit}
                    onChange={this.handleFahrenheitChange} />
                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

export default Calculator3;