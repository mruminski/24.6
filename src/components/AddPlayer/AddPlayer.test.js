import React from "react";
import { shallow, mount } from "enzyme";
import AddPlayer from "./AddPlayer";

it("renders without crashing", () => {
  shallow(<AddPlayer />);
});

it("return onPlayerAdd function", () => {
  const onPlayerAdd = jest.fn();
  const AddPlayerComponent = mount(<AddPlayer onPlayerAdd={onPlayerAdd} />);

  const input = AddPlayerComponent.find("input")
    .first()
    .getDOMNode();

  input.value = "Matthew";

  const form = AddPlayerComponent.find("form");
  form.simulate("submit");

  expect(onPlayerAdd).toBeCalledWith("Matthew");
});
