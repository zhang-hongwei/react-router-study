import compose from "./compose";

export default function applyMiddleware(...middlewares) {
    // console.log('======middlewares==============>', middlewares);

    return createStore => (reducer, ...args) => {
        const store = createStore(reducer, ...args);
        let dispatch = () => {
            throw new Error(
                "Dispatching while constructing your middleware is not allowed. " +
                    "Other middleware would not be applied to this dispatch."
            );
        };

        const middlewareAPI = {
            getState: store.getState,
            dispatch: (action, ...args) => {
                // console.log('触发=action==>', action);
                return dispatch(action, ...args);
            },
            name: "测试"
        };

        console.log("middlewares============>>>", middlewares);

        const chain = middlewares.map(middleware => {
            let a = middleware(middlewareAPI);

            return a;
        });
        // console.log('=====chain===>', chain);
        dispatch = compose(...chain)(store.dispatch);
        // console.log('=====chain= dispatch==>', dispatch);

        return {
            ...store,
            dispatch
        };
    };
}
