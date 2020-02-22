import compose from "./compose";

export default function applyMiddleware(...middlewares) {
    // console.log("======middlewares==============>", middlewares);

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
            dispatch: (action, ...args) => dispatch(action, ...args)
        };
        const chain = middlewares.map(middleware => middleware(middlewareAPI));
        // console.log("=====chain===>", chain);
        dispatch = compose(...chain)(store.dispatch);
        // console.log("=====chain===>", dispatch);

        return {
            ...store,
            dispatch
        };
    };
}
