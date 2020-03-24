import React, { Component } from 'react';
import './App.css';
import LocationCard from './components/LocationCard.js'
import SimpleMap from './components/SimpleMap.js'
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
          <h1>PLACES TO DONATE</h1>
          <SimpleMap locations={this.state.locations} />
          <LocationCard locations={this.state.locations}/>
        </main>
      </div>
    );
  }
}

export default App;
