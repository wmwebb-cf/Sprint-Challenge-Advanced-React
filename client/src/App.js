import React from 'react';
import axios from 'axios';
import Player from './components/SoccerPlayers';

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

  render () {
    return (
      <div className="App">
        <h1>All The Players</h1>
        {this.state.soccerplayers.map(item => (
          <Player player={item} name={item.name} country={item.country} searches={item.searches} key={item.id} />))}
      </div>
    )
  }
}

export default App;
