import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchPlayerData } from "./player-actions";
import {
  FETCH_PLAYER_REQUEST,
  FETCH_PLAYER_SUCCESS,
  FETCH_PLAYER_FAILURE,
  HTTP_HEADER_OPTIONS,
  API_URL
} from "../constants";

describe("player actions - general", () => {
  let mockStore, store;

  beforeEach(() => {
    mockStore = configureMockStore([thunk]);
    store = mockStore({});
  });

  afterEach(() => fetchMock.restore());

  it("should handle fetch debtors success", () => {
    const mockPlayerData = {
      "id": "fabio",
      "active": "true",
      "profile-id": "profile-111"
    };
    fetchMock.get(`${API_URL}/player/${mockPlayerData.id}`, {
      body: mockPlayerData,
      headers: HTTP_HEADER_OPTIONS
    });
    const expectedActions = [
      { type: FETCH_PLAYER_REQUEST },
      { type: FETCH_PLAYER_SUCCESS,
        payload: mockPlayerData 
      }
    ];

    store.dispatch(fetchPlayerData(mockPlayerData.id))
    .then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });

  it("should handle fetch player failure", () => {
      fetchMock.get(`${API_URL}/player/test`, {throws: "ERROR"});
    const expectedActions = [
      { type: FETCH_PLAYER_REQUEST },
      { type: FETCH_PLAYER_FAILURE,
        payload: { error: true } 
      }
    ];
    
    store.dispatch(fetchPlayerData("test"))
    .then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });
});