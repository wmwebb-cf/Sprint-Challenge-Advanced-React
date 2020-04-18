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
        //console.log(response)
        const players = response.data;
        this.setState({ soccerplayers: players })
      }
    )
  }

  render () {
    return (
      <div className="App">
      
      </div>
    )
  }
}

export default App;
