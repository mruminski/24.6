import React, { Component } from "react";
import "./App.css";
import PlayersList from "./components/PlayersList/PlayersList";

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

  render() {
    return (
      <div className="App">
        <PlayersList
          players={this.state.playersArr}
          onScoreUpdate={this.onScoreUpdate}
        />
      </div>
    );
  }
}

export default App;
