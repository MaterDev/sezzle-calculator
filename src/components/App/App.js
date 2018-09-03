import React, { Component } from 'react';
import './App.css';
import ButtonLayout from '../ButtonLayout/ButtonLayout';
class App extends Component {


  render() {

    return (
      <div className="App container">
        {/* Header */}
        <header className="App-header text-secondary">
          <h1 className="App-title">Sezzle Calculator</h1>
          <h3>by. Jakeh Clark</h3>
        </header>

        {/* User Interface will display here */}
        <div className="calculatorBody">
          <ButtonLayout onChange=""/>
        </div>
      </div >
    );
  }
}

export default App;
