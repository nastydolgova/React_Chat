import initialReducer from "./reducers";
import { createStore } from "redux";

// import middlewares from "../middlewares/index";
// , compose, applyMiddleware
function initStore() {
  let initialStore = {};

  return createStore(
    initialReducer,
    initialStore,
    // compose(
    //   applyMiddleware(...middlewares),
    //   window.__REDUX_DEVTOOLS_EXTENSION__
    //     ? window.__REDUX_DEVTOOLS_EXTENSION__()
    //     : () => {},
    // )
  )
}

export default initStore;