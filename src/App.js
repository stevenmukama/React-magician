import React from 'react';
import Calculator from './components/Calculator';
import './app.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <><Calculator /></>
    );
  }
}

export default App;
