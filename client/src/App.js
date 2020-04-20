import React from 'react';
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

  handleClick = e => {
    e.preventDefault();
    //alert('Button clicked!');

    useDarker(true);

  }

  render () {
    return (
      <div className="App">
        <h1>All The Players</h1>
        <button onClick={this.handleClick}>Dark UI</button>
        <div>
        {this.state.soccerplayers.map(item => (
          <Player player={item} name={item.name} country={item.country} searches={item.searches} key={item.id}></Player> ))}
        </div>
        
        
      </div>
    ) 
  }
}

export default App;
