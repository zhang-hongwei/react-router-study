// import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers/index";
import reducers from "./reducers/c";
import logger from "redux-logger";
import thunk from "redux-thunk";
import createStore from "../packages/redux/createStore";
import applyMiddleware from "../packages/redux/applyMiddleware";

function logger1(params) {
    // debugger;
    const { getState } = params;

    // console.log("middlewares===>params===========1=>", params);
    return next => {
        return action1 => {
            // debugger;
            console.log("middlewares will dispatch =====1>", action1);
            // console.log('======>.>next===>', next);
            // Call the next dispatch method in the middleware chain.
            // debugger;
            const returnValue = next(action1); // next2 = action2 函数

            console.log("=========?>>>next", next);
            console.log("middlewares after dispatch =====1a>", getState());
            // debugger;
            // This will likely be the action itself, unless
            // a middleware further in chain changed it.
            return returnValue;
        };
    };
}

function logger2(params) {
    // debugger;
    const { getState } = params;

    // console.log("middlewares===>params===========2=>", params);
    return next => {
        return action2 => {
            // debugger;
            console.log("middlewares will dispatch =====2>", action2);

            // Call the next dispatch method in the middleware chain.
            const returnValue = next(action2); // next2 = action3 函数
            console.log(
                "middlewares state after dispatch =====2a>",
                getState()
            );
            // This will likely be the action itself, unless
            // a middleware further in chain changed it.
            return returnValue;
        };
    };
}

function logger3(params) {
    // debugger;
    const { getState } = params;
    // console.log("middlewares===>params===========3=>", params);

    return next => {
        console.log("middlewares  reducer=1111111111===<`", next);
        return action3 => {
            console.log("middlewares= 最早执行的action==>", action3);
            // debugger;
            console.log("middlewares will dispatch =====3>", action3);
            // console.log('======>.>next===>', next);
            // Call the next dispatch method in the middleware chain.
            const returnValue = next(action3);
            console.log(
                "middlewares state after dispatch =====3a>",
                getState()
            );
            // This will likely be the action itself, unless
            // a middleware further in chain changed it.
            return returnValue;
        };
    };
}

let app = applyMiddleware(logger1, logger2, logger3);
// console.log(app);
const store = createStore(rootReducers, app);

// console.log("init====>", store.getState());

export default store;
