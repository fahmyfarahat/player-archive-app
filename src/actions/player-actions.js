import {
  FETCH_PLAYER_REQUEST,
  FETCH_PLAYER_SUCCESS,
  FETCH_PLAYER_FAILURE,
  HTTP_HEADER_OPTIONS,
  API_URL
} from "../constants";

const fetchPlayerRequest = () => ({
    type: FETCH_PLAYER_REQUEST
});

const fetchPlayerSuccess = payload => ({
    type: FETCH_PLAYER_SUCCESS,
    payload
});

const fetchPlayerFailure = payload => ({
    type: FETCH_PLAYER_FAILURE,
    payload
});

export const fetchPlayerData = playerId => async dispatch => {
  try {
    dispatch(fetchPlayerRequest());
    const response = await fetch(`${API_URL}/player/${playerId}`, HTTP_HEADER_OPTIONS);
    const json = await response.json();
    dispatch(fetchPlayerSuccess(json));
  } catch (err) {
  dispatch(fetchPlayerFailure({error: true}));
  }
};
