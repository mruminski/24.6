import React, { Component } from "react";
import "./App.css";
import PlayersList from "./components/PlayersList/PlayersList";
import AddPlayer from "./components/AddPlayer/AddPlayer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      playersArr: []
    };
  }

  onScoreUpdate = (playerIndex, scoreToAdd) => {
    this.setState({
      playersArr: this.state.playersArr.map((player, index) => {
        if (index === playerIndex) {
          return { ...player, score: (player.score += scoreToAdd) };
        }
        return player;
      })
    });
  };

  onPlayerAdd = playerName => {
    const newPlayer = {
      name: playerName,
      score: 0
    };
    this.setState({
      playersArr: [...this.state.playersArr, newPlayer]
    });
  };

  onPlayerRemove = name => {
    this.setState({
      playersArr: this.state.playersArr.filter(player => player.name !== name)
    });
  };

  render() {
    return (
      <div className="App">
        <AddPlayer onPlayerAdd={this.onPlayerAdd} />
        <PlayersList
          players={this.state.playersArr}
          onScoreUpdate={this.onScoreUpdate}
          onPlayerRemove={this.onPlayerRemove}
        />
      </div>
    );
  }
}

export default App;
