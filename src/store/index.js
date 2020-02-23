// import { createStore, applyMiddleware } from "redux";
import rootReducers from './reducers/index';
import reducers from './reducers/c';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createStore from '../packages/redux/createStore';
import applyMiddleware from '../packages/redux/applyMiddleware';

function logger1(params) {
    // debugger;
    const { getState } = params;
    // console.log('====>1');
    // console.log('====>params>>>>', params);
    return next => {
        return action1 => {
            // debugger;
            console.log('will dispatch =====1>', action1);
            // console.log('======>.>next===>', next);
            // Call the next dispatch method in the middleware chain.
            // debugger;
            const returnValue = next(action1);

            console.log('=========?>>>next', next);
            console.log('state after dispatch =====1>', getState());
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
    // console.log('====>2');
    // console.log('====>params>>>>', params);
    return next => {
        return action2 => {
            // debugger;
            console.log('will dispatch =====2>', action2);

            // Call the next dispatch method in the middleware chain.
            const returnValue = next(action2);
            console.log('state after dispatch =====2>', getState());
            // This will likely be the action itself, unless
            // a middleware further in chain changed it.
            return returnValue;
        };
    };
}

function logger3(params) {
    // debugger;
    const { getState } = params;
    // console.log('====>3');
    // console.log('====>params>>>>', params);
    return next => {
        return action3 => {
            // debugger;
            console.log('will dispatch =====3>', action3);
            // console.log('======>.>next===>', next);
            // Call the next dispatch method in the middleware chain.
            const returnValue = next(action3);
            console.log('state after dispatch =====3>', getState());
            // This will likely be the action itself, unless
            // a middleware further in chain changed it.
            return returnValue;
        };
    };
}

let app = applyMiddleware(logger);
// console.log(app);
const store = createStore(rootReducers, app);

// console.log("init====>", store.getState());

export default store;
