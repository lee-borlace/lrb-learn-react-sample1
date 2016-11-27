import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';

class Calculator2 extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}

export default Calculator2;