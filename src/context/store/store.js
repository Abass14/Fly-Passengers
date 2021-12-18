import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import getPasssengerReducer from "../reducer/reducer";

const rootReducer = combineReducers({getPasssengerReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));