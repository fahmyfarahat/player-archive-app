import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchProfileData } from "./profile-actions";
import {
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
  HTTP_HEADER_OPTIONS,
  API_URL
} from "../constants";

describe("profile actions - general", () => {
  let mockStore, store;

  beforeEach(() => {
    mockStore = configureMockStore([thunk]);
    store = mockStore({});
  });

  afterEach(() => fetchMock.restore());

  it("should handle fetch debtors success", () => {
    const mockProfileData = {
      "id": "fabio",
      "profile": {
        "age": "33",
        "role": "centre-back",
        "team": "Juventus",
        "picture": "url"
      }
    };
    fetchMock.get(`${API_URL}/profile/${mockProfileData.id}`, {
      body: mockProfileData,
      headers: HTTP_HEADER_OPTIONS
    });
    const expectedActions = [
      { type: FETCH_PROFILE_REQUEST },
      { type: FETCH_PROFILE_SUCCESS,
        payload: mockProfileData 
      }
    ];

    store.dispatch(fetchProfileData(mockProfileData.id))
    .then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });

  it("should handle fetch profile failure", () => {
      fetchMock.get(`${API_URL}/profile/test`, {throws: "ERROR"});
    const expectedActions = [
      { type: FETCH_PROFILE_REQUEST },
      { type: FETCH_PROFILE_FAILURE,
        payload: { error: true } 
      }
    ];
    
    store.dispatch(fetchProfileData("test"))
    .then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });
});