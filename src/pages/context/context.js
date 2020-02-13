import React from 'react';
import RouterContext from './mycontext';

/**
 * The public API for putting history on context.
 */
class Router1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 1
        };
    }

    componentDidMount() {
        console.log('===> this.props ===>', this.props);
    }

    render() {
        return (
            <RouterContext.Provider
                children={this.props.children}
                value={{
                    history: 'history',
                    location: 'location'
                }}
            />
        );
    }
}

export default Router1;
