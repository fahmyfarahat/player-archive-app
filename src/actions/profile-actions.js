import {
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
  HTTP_HEADER_OPTIONS,
  API_URL
} from "../constants";

const fetchProfileRequest = () => ({
  type: FETCH_PROFILE_REQUEST
});

const fetchProfileSuccess = payload => ({
    type: FETCH_PROFILE_SUCCESS,
    payload
});

const fetchProfileFailure = payload => ({
    type: FETCH_PROFILE_FAILURE,
    payload
});

export const fetchProfileData = playerId => async dispatch => {
  try {
    dispatch(fetchProfileRequest());
    const response = await fetch(`${API_URL}/profile/${playerId}`, HTTP_HEADER_OPTIONS);
    const json = await response.json();

    dispatch(fetchProfileSuccess(json));
  } catch (error) {
    dispatch(fetchProfileFailure({error: true}));
  }
};
