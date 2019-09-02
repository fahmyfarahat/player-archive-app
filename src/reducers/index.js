import { combineReducers } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import Promise from "redux-promise";
import thunk from "redux-thunk";
import playerReducer from "./player-reducer";
import profileReducer from "./profile-reducer";

const rootReducer = combineReducers({
  player: playerReducer,
  profile: profileReducer
});

export default (reducer = rootReducer) => {
  return createStore(reducer, compose(applyMiddleware(...[thunk, Promise])));
};