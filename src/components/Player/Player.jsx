import React from "react";
import "./Player.css";

const Player = props => (
  <li className="Player">
    <span className="player__name">{props.name}</span>
    <span className="player__score">{props.score}</span>
    <span
      className="player__btn--add"
      onClick={() => props.onPlayerScoreChange(1)}
    >
      +
    </span>
    <span
      className="player__btn--subtract"
      onClick={() => props.onPlayerScoreChange(-1)}
    >
      -
    </span>
    <span
      className="player__btn--remove"
      onClick={() => props.onPlayerRemove()}
    >
      Remove
    </span>
  </li>
);

export default Player;
