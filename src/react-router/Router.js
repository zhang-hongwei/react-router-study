import React from 'react';
import PropTypes from 'prop-types';
import warning from 'tiny-warning';

import RouterContext from './RouterContext.js';

/**
 * The public API for putting history on context.
 */
class Router extends React.Component {
    static computeRootMatch(pathname) {
        return { path: '/', url: '/', params: {}, isExact: pathname === '/' };
    }

    constructor(props) {
        super(props);

        this.state = {
            location: props.history.location
        };

        // This is a bit of a hack. We have to start listening for location
        // changes here in the constructor in case there are any <Redirect>s
        // on the initial render. If there are, they will replace/push when
        // they mount and since cDM fires in children before parents, we may
        // get a new location before the <Router> is mounted.
        this._isMounted = false;
        this._pendingLocation = null;

        if (!props.staticContext) {
            // console.log("route==============>>>!props===>",!props.staticContext)
            this.unlisten = props.history.listen(location => {
                console.log("route====>location 改变==>", location);
                if (this._isMounted) {
                    console.log("route====>location===>", this._isMounted);
                    this.setState(
                        { location, test: "测试+=>" + Math.random() },
                        () => {
                            console.log(this.state);
                        }
                    );
                } else {
                    this._pendingLocation = location;
                }
            });
            // console.log("route==============>>>!props===>",this.unlisten)
        }
    }

    componentDidMount() {
        this._isMounted = true;

        if (this._pendingLocation) {
            this.setState({ location: this._pendingLocation });
        }

<<<<<<< HEAD
        console.log('===> this.props===>router', this.props);
=======
        // console.log("===> this.psssrops", this.props);
>>>>>>> 9839febd3aba17a2745eadc13e04fdb311ba7572
    }

    componentWillUnmount() {
        if (this.unlisten) this.unlisten();
    }

    render() {
        // console.log("route===.ll", this.props.staticContext);
        return (
            <RouterContext.Provider
                children={this.props.children || null}
                value={{
                    history: this.props.history,
                    location: this.state.location,
                    match: Router.computeRootMatch(
                        this.state.location.pathname
                    ),
                    staticContext: this.props.staticContext
                }}
            />
        );
    }
}

// if (__DEV__) {
//   Router.propTypes = {
//     children: PropTypes.node,
//     history: PropTypes.object.isRequired,
//     staticContext: PropTypes.object
//   };

//   Router.prototype.componentDidUpdate = function(prevProps) {
//     warning(
//       prevProps.history === this.props.history,
//       "You cannot change <Router history>"
//     );
//   };
// }

export default Router;
