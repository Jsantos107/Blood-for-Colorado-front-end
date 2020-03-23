import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    locations: []
  }
  componentDidMount(){
    fetch('http://localhost:3000/locations')
      .then(response => response.json())
      .then(locations => this.setState({ locations }))
  }
  render(){
    return (
      <div className="App">
        <header className="header">
          <img src='./bloodlogo.png' alt='blood-for-colorado'/>
        </header>
        <main className="main">

        </main>
      </div>
    );
  }
}

export default App;
