import { combineReducers } from "redux";
import a from "./a";
import b from "./b";
import c from "./c";

const rootReducers = combineReducers({
    a: a,
    b: b,
    c: c
});

export default rootReducers;
