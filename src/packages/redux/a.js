function createStore(reducer) {
    let state = {}; // 状态
    let listeners = []; // 监听列表
    function dispatch(action) {
        state = reducer(state, action);
        listeners.forEach(listener => listener(state));
        return action;
    }
    function getState() {
        return state;
    }
    function subscribe(listener) {
        listeners.push(listener);
        return () => {
            listeners.filter(item => item != listener);
        };
    }

    const store = {
        dispatch: dispatch,
        subscribe,
        getState
    };

    return store;
}

const reducer = (state, action) => {
    if (action.type === "ADD_A_NUM") {
        return {
            ...state,
            num: action.payload
        };
    }
};

let store1 = createStore(reducer);
