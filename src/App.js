import React, { Component } from 'react';
import Background from './components/Background'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header content="QueRico Woerden"/>
        <Background/>
      </div>
    );
  }
}

export default App;
