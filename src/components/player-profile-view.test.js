import React from "react";
import { shallow } from "enzyme";
import PlayerProfileView from "./player-profile-view";
import PlayerStatsView from "./player-stats-view";
import mockFabioProfile from "../../json/profile-333.json"
import toJson from "enzyme-to-json";

describe("PlayerProfileView - general", () => {
  let wrapper;
  beforeEach(()=> {
    const profile = {
      ...mockFabioProfile
    };
    wrapper = shallow(<PlayerProfileView profile={profile} />);
  });
  
  it("should render without crashing", () => {
    expect(wrapper).toHaveLength(1);
  });  

  it("should render 4 cols - PlayerStatsView", () => {
    expect(wrapper.find(PlayerStatsView)).toHaveLength(4);
  });

  it("should match Snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
