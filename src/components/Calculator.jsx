import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  render() {
    return (
      <div className="mainCalc">
        <div className="firstrowsection">
          <input className="firstrow" type="text" value={0} readOnly />
        </div>
        <div className="secondrow">
          <button type="button" className="firstsection">AC </button>
          <button type="button" className="firstsection"> +/-</button>
          <button type="button" className="firstsection"> % </button>
          <button type="button" className="secondsection"> ÷ </button>
          <button type="button" className="firstsection">7</button>
          <button type="button" className="firstsection">8</button>
          <button type="button" className="firstsection">9</button>
          <button type="button" className="secondsection">x</button>
          <button type="button" className="firstsection">4</button>
          <button type="button" className="firstsection">5</button>
          <button type="button" className="firstsection">6</button>
          <button type="button" className="secondsection">-</button>
          <button type="button" className="firstsection">1</button>
          <button type="button" className="firstsection">2</button>
          <button type="button" className="firstsection">3</button>
          <button type="button" className="secondsection">+</button>
          <button type="button" className="firstsectionzero">0</button>
          <button type="button" className="firstsection">.</button>
          <button type="button" className="secondsection">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
