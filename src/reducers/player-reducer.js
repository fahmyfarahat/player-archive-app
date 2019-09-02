import {
  FETCH_PLAYER_REQUEST,
  FETCH_PLAYER_SUCCESS,
  FETCH_PLAYER_FAILURE,
} from "../constants";

const initialState = { data: {}, loading: false, error: false };

const playerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PLAYER_REQUEST:
      return {
        ...state,
        data: {},
        loading: true
      };
    case FETCH_PLAYER_SUCCESS:
      return {
        error: false,
        loading: false,
        data: payload
      };
    case FETCH_PLAYER_FAILURE:
      return {
        data: {},
        loading: false,
        error: payload.error
      };
    default:
      return state
  }
}

export default playerReducer;