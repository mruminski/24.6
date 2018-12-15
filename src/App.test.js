import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import PlayerList from "./components/PlayersList/PlayersList";

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
