import {
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE
} from "../constants";

const initialState = { data: {}, loading: false, error: false };

const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PROFILE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_PROFILE_SUCCESS:
      return {
        loading: false,
        error: false,
        data: payload
      };
    case FETCH_PROFILE_FAILURE:
      return {
        data: {},
        loading: false,
        error: payload.error
      };
    default:
      return state
  }
}

export default profileReducer;