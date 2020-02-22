// import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers/index";
import reducers from "./reducers/c";
import logger from "redux-logger";
import thunk from "redux-thunk";
import createStore from "../packages/redux/createStore";
import applyMiddleware from "../packages/redux/applyMiddleware";

let app = applyMiddleware(thunk, logger);
console.log(app);
const store = createStore(reducers, app);

// console.log("init====>", store.getState());

export default store;
