import React from "react";
import { shallow, mount } from "enzyme";
import { App } from "./app";
import { 
  PlayerProfileView, 
  ErrorMessageView 
} from "../components";
import { ERROR_MESSAGE } from "../constants";
import mockFabioProfile from "../../json/profile-333.json"
import toJson from "enzyme-to-json";

describe("App - general", () => {
  let props;
  beforeEach(()=> {
    const initData = {
      data: {},
      error: false,
      loading: false,
    }
    props = {
      getPlayerData: jest.fn(),
      getProfileData: jest.fn(),
      player: initData,
      profile: initData
    };
  });

  it("should render without crashing", () => {
    const wrapper = shallow(<App {...props} />);
    expect(wrapper).toHaveLength(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render error message view if fetch Player Failure", async () => {
    props.player = {
      ...props.player,
      error: true
    };
    const wrapper = shallow(<App {...props} />);
    expect(wrapper.find(ErrorMessageView).props().message).toEqual(ERROR_MESSAGE)
  });

  it("should render error message view if player active=false", async () => {
    props.player.data = {
      "active": false,
      "id": "giorgio",
      "profile-id": "profile-333.json"
    };
    const wrapper = shallow(<App {...props} />);
    expect(wrapper.find(ErrorMessageView).props().message).toEqual(ERROR_MESSAGE)
  });

  it("should render player profile view if player active=true", async () => {
    props.player = {
      ...props.player,
      data: {
        "active": true,
        "id": "fabio",
        "profile-id": "profile-111.json"
      }
    };
    props.profile = {
      ...props.profile,
      data: mockFabioProfile
    }

    const wrapper = mount(<App {...props} />);
    expect(wrapper.find(PlayerProfileView)).toHaveLength(1);
  });
});
