import React from 'react';
import './Calculator.css'

class Calculator extends React.Component {
	render()
	{
	return (
	<div className="mainCalc">
  <div className='firstrowsection'>
  <input  className='firstrow' type="text" value={0} readOnly />
  </div>
  <div className='secondrow'>
<button className="firstsection">AC </button>
<button className="firstsection"> +/-</button>
<button className="firstsection"> % </button>
<button className="secondsection"> ÷ </button>
<button className="firstsection">7</button>
<button className="firstsection">8</button>
<button className="firstsection">9</button>
<button className="secondsection">x</button>
<button className="firstsection">4</button>
<button className="firstsection">5</button>
<button className="firstsection">6</button>
<button className="secondsection">-</button>
<button className="firstsection">1</button>
<button className="firstsection">2</button>
<button className="firstsection">3</button>
<button className="secondsection">+</button>
<button className="firstsectionzero">0</button>
<button  className="firstsection">.</button>
<button  className="secondsection">=</button>
</div>
	</div>
	);
}
}

export default Calculator;
