import React from "react";
import { shallow } from "enzyme";
import Player from "./Player";

it("renders without crashing", () => {
  shallow(<Player />);
});

it("renders correct name", () => {
  const playerNamePassed = "Matt";
  const playerComponent = shallow(<Player name={playerNamePassed} />);

  const playerNameRendered = playerComponent.find(".player__name").text();

  expect(playerNameRendered).toEqual(playerNamePassed);
});

it("renders correct score", () => {
  const playerScorePassed = 7;
  const playerComponent = shallow(<Player score={playerScorePassed} />);

  const playerScoreRendered = Number(
    playerComponent.find(".player__score").text()
  );

  expect(playerScoreRendered).toEqual(playerScorePassed);
});

it("should call onPlayerScoreChange with ++", () => {
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(
    <Player onPlayerScoreChange={mockedOnPlayerScoreChange} />
  );

  const plusBtn = playerComponent.find(".player__btn--add");
  plusBtn.simulate("click");

  expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
});

it("should call onPlayerScoreChange with --", () => {
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(
    <Player onPlayerScoreChange={mockedOnPlayerScoreChange} />
  );

  const minusBtn = playerComponent.find(".player__btn--subtract");
  minusBtn.simulate("click");

  expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
});

it("should call onPlayerRemove", () => {
  const mockedOnPlayerRemove = jest.fn();
  const playerComponent = shallow(
    <Player onPlayerRemove={mockedOnPlayerRemove} />
  );

  const removeBtn = playerComponent.find(".player__btn--remove");
  removeBtn.simulate("click");

  expect(mockedOnPlayerRemove).toBeCalled();
});
