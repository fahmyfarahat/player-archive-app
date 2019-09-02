import React from "react";
import { shallow } from "enzyme";
import SearchInputForm from "./search-input-form";
import toJson from "enzyme-to-json";

describe("SearchInputForm - general", () => {
 let wrapper;
  beforeEach(()=> {
    const props = {
      buttonText: "go",
      name: "input",
      placeholder: "text..",
      onSubmit: jest.fn()
    }
    wrapper = shallow(<SearchInputForm {...props}/>);
  });
  
  it("should render without crashing", () => {
    expect(wrapper).toHaveLength(1);
  });
    
  it("should match Snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
