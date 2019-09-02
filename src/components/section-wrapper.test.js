import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import SectionWrapper from "./section-wrapper";

describe("SectionWrapper - general", () => {
  let wrapper;
  beforeEach(()=> {
    const props = {
      className: "test"
    }
    wrapper = shallow(<SectionWrapper {...props}><div>test</div></SectionWrapper>);
  });

  test("without crashing", () => {
    expect(wrapper).toHaveLength(1);
  });

  test("should match Snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
