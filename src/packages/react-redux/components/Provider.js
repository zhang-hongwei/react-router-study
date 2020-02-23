import React, { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ReactReduxContext } from './Context';
import Subscription from '../utils/Subscription';

function Provider({ store, context, children }) {
    // console.log('store=====>', store);

    const contextValue = useMemo(() => {
        const subscription = new Subscription(store);
        // console.log('subscription=====>', subscription);
        subscription.onStateChange = subscription.notifyNestedSubs;
        return {
            store,
            subscription
        };
    }, [store]);

    const previousState = useMemo(() => store.getState(), [store]);

    useEffect(() => {
        // console.log("====effects===>")
        const { subscription } = contextValue;
        subscription.trySubscribe();

        if (previousState !== store.getState()) {
            subscription.notifyNestedSubs();
        }
        return () => {
            subscription.tryUnsubscribe();
            subscription.onStateChange = null;
        };
    }, [contextValue, previousState]);

    const Context = context || ReactReduxContext;

    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

Provider.propTypes = {
    store: PropTypes.shape({
        subscribe: PropTypes.func.isRequired,
        dispatch: PropTypes.func.isRequired,
        getState: PropTypes.func.isRequired
    }),
    context: PropTypes.object,
    children: PropTypes.any
};

export default Provider;
