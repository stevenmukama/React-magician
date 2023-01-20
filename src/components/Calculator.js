import React, { useState } from 'react';
import './Calculator.css';
import calculate from './logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const clickHandler = (e) => {
    const result = calculate(state, e.target.textContent);
    setState((prevState) => ({
      ...prevState,
      ...result,
    }));
  };

  const { total, next } = state;
  return (
    <div className="calculatorcomponent">
      <h2>Let&apos;s do some math!</h2>
      <div className="mainCalc">
        <div className="firstrowsection">
          <p className="answertab" type="text">{next || total || 0}</p>
          {' '}
        </div>
        <div className="secondrow">
          <button type="button" className="firstsection" onClick={clickHandler}>AC</button>
          <button type="button" className="firstsection" onClick={clickHandler}>+/-</button>
          <button type="button" className="firstsection" onClick={clickHandler}>%</button>
          <button type="button" className="secondsection" onClick={clickHandler}>÷</button>
          <button type="button" className="firstsection" onClick={clickHandler}>7</button>
          <button type="button" className="firstsection" onClick={clickHandler}>8</button>
          <button type="button" className="firstsection" onClick={clickHandler}>9</button>
          <button type="button" className="secondsection" onClick={clickHandler}>x</button>
          <button type="button" className="firstsection" onClick={clickHandler}>4</button>
          <button type="button" className="firstsection" onClick={clickHandler}>5</button>
          <button type="button" className="firstsection" onClick={clickHandler}>6</button>
          <button type="button" className="secondsection" onClick={clickHandler}>-</button>
          <button type="button" className="firstsection" onClick={clickHandler}>1</button>
          <button type="button" className="firstsection" onClick={clickHandler}>2</button>
          <button type="button" className="firstsection" onClick={clickHandler}>3</button>
          <button type="button" className="secondsection" onClick={clickHandler}>+</button>
          <button type="button" className="firstsectionzero" onClick={clickHandler}>0</button>
          <button type="button" className="firstsection" onClick={clickHandler}>.</button>
          <button type="button" className="secondsection" onClick={clickHandler}>=</button>
        </div>
      </div>

    </div>
  );
};

export default Calculator;
