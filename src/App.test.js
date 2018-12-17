import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import PlayerList from "./components/PlayersList/PlayersList";
import AddPlayer from "./components/AddPlayer/AddPlayer";

it("renders without crashing", () => {
  shallow(<App />);
});

it("should update user score", () => {
  const appComponent = shallow(<App />);
  const playersArr = [
    {
      name: "Matt",
      score: 7
    }
  ];

  appComponent.setState({ playersArr });

  const onScoreUpdate = appComponent.find(PlayerList).prop("onScoreUpdate");

  onScoreUpdate(0, 7);

  const playersArrAfterUpdate = appComponent.state().playersArr;

  const firstPlayerScore = playersArrAfterUpdate[0].score;

  expect(firstPlayerScore).toEqual(14);
});

it("should add new player to the app state", () => {
  const appComponent = shallow(<App />);
  const onPlayerAdd = appComponent.find(AddPlayer).prop("onPlayerAdd");

  onPlayerAdd("Matt");

  const playersArr = appComponent.state("playersArr");

  expect(playersArr.length).toEqual(1);
  expect(playersArr[0].name).toEqual("Matt");
  expect(playersArr[0].score).toEqual(0);
});

it("should remove player from the app state", () => {
  const appComponent = shallow(<App />);
  const onPlayerRemove = appComponent.find("PlayerList").prop("onPlayerRemove");

  onPlayerRemove("Matt");

  const playersArr = appComponent.state("playersArr");

  expect(playersArr.length).toEqual(0);
});
