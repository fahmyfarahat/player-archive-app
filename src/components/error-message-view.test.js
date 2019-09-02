import React from "react";
import { shallow } from "enzyme";
import ErrorMessageView from "./error-message-view";
import toJson from "enzyme-to-json";

describe("ErrorMessageView - general", () => {
  let wrapper;
  beforeEach(()=> {
    const props = {
      message: "Player is not available.",
      className: "error"
    }
    wrapper = shallow(<ErrorMessageView {...props}/>);
  });
  
  it("should render without crashing", () => {
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(".error").text()).toEqual("Player is not available.");
  });

  it("should match Snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
