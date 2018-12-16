import React from "react";
import { shallow } from "enzyme";
import PlayersList from "./PlayersList";
import Player from "../Player/Player";

it("renders without crashing", () => {
  shallow(<PlayersList players={[]} />);
});

it("renders correct number of players", () => {
  const playersArr = [
    {
      name: "Matt",
      score: 7
    },
    {
      name: "Bob",
      score: 9
    }
  ];

  const playerComponent = shallow(<PlayersList players={playersArr} />);
  const expectedPlayersNumber = playerComponent.find(Player).length;

  expect(expectedPlayersNumber).toEqual(2);
});

it("should return if onScoreUpdate was invoked", () => {
  const playersArr = [
    {
      name: "Matt",
      score: 7
    },
    {
      name: "Bob",
      score: 9
    }
  ];

  const mockedOnScoreUpdate = jest.fn();
  const playerComponent = shallow(
    <PlayersList players={playersArr} onScoreUpdate={mockedOnScoreUpdate} />
  );

  const lastPlayer = playerComponent.find(Player).last();
  const onPlayerScoreChange = lastPlayer.prop("onPlayerScoreChange");

  onPlayerScoreChange(7);

  expect(mockedOnScoreUpdate).toBeCalledWith(1, 7);
});

it("should return if onPlayerRemove invoked", () => {
  const playersArr = [
    {
      name: "Matt",
      score: 7
    },
    {
      name: "Bob",
      score: 9
    }
  ];

  const mockedOnPlayerRemove = jest.fn();
  const playerComponent = shallow(
    <PlayersList players={playersArr} onPlayerRemove={mockedOnPlayerRemove} />
  );

  const lastPlayer = playerComponent.find(Player).last();
  const playerToRemove = lastPlayer.prop("onPlayerRemove");

  playerToRemove("Bob");

  expect(mockedOnPlayerRemove).toBeCalledWith("Bob");
});
