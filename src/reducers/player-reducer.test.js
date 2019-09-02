import playerReducer from "./player-reducer";
import {
  FETCH_PLAYER_REQUEST,
  FETCH_PLAYER_SUCCESS,
  FETCH_PLAYER_FAILURE,
} from "../constants";

describe("playerReducer - general", () => {
  it("should return the initial state", () => {
    const expactedInitialState = { data: {}, loading: false, error: false };
    expect(playerReducer(undefined, {})).toEqual(expactedInitialState);    
  });

  it("should handle loading for fetch player request", () => {
    const startPlayerAction = {
      type: FETCH_PLAYER_REQUEST
    };
    const expacted = { loading: true, data: {} };
    expect(playerReducer({}, startPlayerAction)).toEqual(expacted);
  });

  it("should handle fetch player success FETCH_PLAYER_SUCCESS", () => {
    const mockPlayerData = {
      "id": "fabio",
      "active": "true",
      "profile-id": "profile-111"
    };
    const successAction = {
      type: FETCH_PLAYER_SUCCESS,
      payload: mockPlayerData
    };
    const expacted = {
      data: mockPlayerData,
      error: false,
      loading: false
    };
    expect(playerReducer({}, successAction)).toEqual(expacted);
  });

  it("should handle fetch player failure", () => {
    const failAction = {
      type: FETCH_PLAYER_FAILURE,
      payload: { error: true },
    };
    const expacted = { loading: false, error: true, data: {} };
    expect(playerReducer({}, failAction)).toEqual(expacted);
  });
});