import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Player from './components/SoccerPlayers';
import { useDarker } from './hooks/useDarker';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      soccerplayers: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players').then(
      (response) => {
        const players = response.data;
        this.setState({ soccerplayers: players })
      }
    )
  }

  const [darkMode, setDarkMode] = useDarker(false);

  handleClick() {
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    }
  }

  render () {
    return (
      <div className="App">
        <h1>All The Players</h1>
        <button onClick={handleClick} className={darkMode ? 'toggle toggled' : 'toggle'}>Make me dark!</button>
        {this.state.soccerplayers.map(item => (
          <Player player={item} name={item.name} country={item.country} searches={item.searches} key={item.id} />))}
      </div>
    )
  }
}

export default App;
