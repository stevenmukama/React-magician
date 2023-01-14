import React from 'react';
import './Calculator.css';
import calculate from './logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  clickHandler = (e) => {
    const result = calculate(this.state, e.target.textContent);
    this.setState((prevState) => ({
      ...prevState,
      ...result,
    }));
  };

  render() {
    const { total, next } = this.state;
    return (
      <div className="mainCalc">
        <div className="firstrowsection">
          <p className="answertab" type="text">{ next || total || 0}</p>
          {' '}
        </div>
        <div className="secondrow">
          <button type="button" className="firstsection" onClick={this.clickHandler}>AC</button>
          <button type="button" className="firstsection" onClick={this.clickHandler}>+/-</button>
          <button type="button" className="firstsection" onClick={this.clickHandler}>%</button>
          <button type="button" className="secondsection" onClick={this.clickHandler}>÷</button>
          <button type="button" className="firstsection" onClick={this.clickHandler}>7</button>
          <button type="button" className="firstsection" onClick={this.clickHandler}>8</button>
          <button type="button" className="firstsection" onClick={this.clickHandler}>9</button>
          <button type="button" className="secondsection" onClick={this.clickHandler}>x</button>
          <button type="button" className="firstsection" onClick={this.clickHandler}>4</button>
          <button type="button" className="firstsection" onClick={this.clickHandler}>5</button>
          <button type="button" className="firstsection" onClick={this.clickHandler}>6</button>
          <button type="button" className="secondsection" onClick={this.clickHandler}>-</button>
          <button type="button" className="firstsection" onClick={this.clickHandler}>1</button>
          <button type="button" className="firstsection" onClick={this.clickHandler}>2</button>
          <button type="button" className="firstsection" onClick={this.clickHandler}>3</button>
          <button type="button" className="secondsection" onClick={this.clickHandler}>+</button>
          <button type="button" className="firstsectionzero" onClick={this.clickHandler}>0</button>
          <button type="button" className="firstsection" onClick={this.clickHandler}>.</button>
          <button type="button" className="secondsection" onClick={this.clickHandler}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
