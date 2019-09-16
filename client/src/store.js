import { createStore, applyMiddleware, compose } from "redux";
// Thunk middleware
import thunk from "redux-thunk";
import rootReducer from "./reducers"; //coz there is index.js

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ) //adding redux dev tools for chrome
);

export default store;
