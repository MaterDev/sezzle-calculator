import React, { Component } from 'react';
import './App.css';
import ButtonLayout from '../ButtonLayout/ButtonLayout';

class App extends Component {
  render() {
    return (
      <div className="App container">
        {/* Header */}
        <header className="App-header">
          <h1 className="App-title">Sezzle Calculator</h1>
          <h3>by. Jakeh Clark</h3>
        </header>

        {/* User Interface */}
        <div className="calculatorBody">
          <ButtonLayout />
        </div>
      </div >
    );
  }
}

export default App;
