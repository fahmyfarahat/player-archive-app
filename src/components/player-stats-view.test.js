import React from "react";
import { shallow } from "enzyme";
import PlayerStatsView from "./player-stats-view";
import toJson from "enzyme-to-json";

describe("PlayerStatsView - general", () => {
  let wrapper;
  beforeEach(()=> {
    const props = {
      title: "title",
      statsToShow: ["blocks"],
      stats: {
        blocks: "blocks"
      }
    }
    wrapper = shallow(<PlayerStatsView {...props}/>);
  });
  
  it("should render without crashing", () => {
    expect(wrapper).toHaveLength(1);
  });
  
  it("should match Snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
