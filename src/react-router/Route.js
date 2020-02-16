import React from "react";
import { isValidElementType } from "react-is";
import PropTypes from "prop-types";
import invariant from "tiny-invariant";
import warning from "tiny-warning";

import RouterContext from "./RouterContext.js";
import matchPath from "./matchPath.js";

function isEmptyChildren(children) {
    return React.Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
    const value = children(props);

    warning(
        value !== undefined,
        "You returned `undefined` from the `children` function of " +
            `<Route${path ? ` path="${path}"` : ""}>, but you ` +
            "should have returned a React element or `null`"
    );

    return value || null;
}

/**
 * The public API for matching a single path and rendering.
 */
class Route extends React.Component {
    componentDidMount() {
        console.log("route===>1", this.props);
    }

    render() {
        const __DEV__ = false;
        return (
            <RouterContext.Consumer>
                {context => {
                    invariant(
                        context,
                        "You should not use <Route> outside a <Router>"
                    );

                    console.log("route===>context", context);

                    const location = this.props.location || context.location;
                    const match = this.props.computedMatch
                        ? this.props.computedMatch // <Switch> already computed the match for us
                        : this.props.path
                        ? matchPath(location.pathname, this.props)
                        : context.match;

                    console.log(
                        "matchPath==>",
                        matchPath(location.pathname, this.props)
                    );

                    console.log("matchPath==>match", match);

                    const props = { ...context, location, match };

                    console.log("route===>props", props);

                    let { children, component, render } = this.props;

                    // Preact uses an empty array as children by
                    // default, so use null if that's the case.
                    if (Array.isArray(children) && children.length === 0) {
                        children = null;
                    }

                    console.log("props.match==>", props.match);
                    console.log("props.match==>children", children);
                    console.log("props.match==>component", component);
                    // console.log("props.children==>", component);

                    return (
                        <RouterContext.Provider value={props}>
                            {props.match
                                ? children
                                    ? typeof children === "function"
                                        ? __DEV__
                                            ? evalChildrenDev(
                                                  children,
                                                  props,
                                                  this.props.path
                                              )
                                            : children(props)
                                        : children
                                    : component
                                    ? React.createElement(component, props)
                                    : render
                                    ? render(props)
                                    : null
                                : typeof children === "function"
                                ? __DEV__
                                    ? evalChildrenDev(
                                          children,
                                          props,
                                          this.props.path
                                      )
                                    : children(props)
                                : null}
                        </RouterContext.Provider>
                    );
                }}
            </RouterContext.Consumer>
        );
    }
}

export default Route;
