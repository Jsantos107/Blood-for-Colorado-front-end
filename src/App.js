import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    location: []
  }
  componentDidMount(){
    fetch('')
      .then(response => response.json())
      .then(console.log)
  }
  render(){
    return (
      <main className="App">
        <header>
          <img src='./bloodlogo.png' alt='blood-for-colorado'/>
        </header>
      </main>
    );
  }
}

export default App;
