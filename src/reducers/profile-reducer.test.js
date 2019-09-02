import PorfileReducer from "./profile-reducer";
import {
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE
} from "../constants";

describe("PorfileReducer - general", () => {
  it("should return the initial state", () => {
    const expactedInitialState = { data: {}, loading: false, error: false };
    expect(PorfileReducer(undefined, {})).toEqual(expactedInitialState);    
  });

  it("should handle loading for fetch profile request", () => {
    const startProfileAction = {
      type: FETCH_PROFILE_REQUEST
    };
    const expacted = { loading: true };
    expect(PorfileReducer({}, startProfileAction)).toEqual(expacted);
  });

  it("should handle fetch profile success FETCH_PLAYER_SUCCESS", () => {
    const mockProfileData = {
      "id": "fabio",
      "profile": {
        "age": "33",
        "role": "centre-back",
        "team": "Juventus",
        "picture": "url"
      },
    };
    const successAction = {
      type: FETCH_PROFILE_SUCCESS,
      payload: mockProfileData
    };
    const expacted = {
      data: mockProfileData,
      error:false,
      loading: false
    };
    expect(PorfileReducer({}, successAction)).toEqual(expacted);
  });

  it("should handle fetch profile failure", () => {
    const failAction = {
      type: FETCH_PROFILE_FAILURE,
      payload: { error: true },
    };
    const expacted = { loading: false, error: true, data: {} };
    expect(PorfileReducer({}, failAction)).toEqual(expacted);
  });
});