import React from "react";
import ReactDOM from "react-dom";
// import { Router, Route, Switch, Link } from "react-router-dom";
import { Router, Route } from "./react-router";
import "./index.css";

// import { Router, Route } from 'react-router';
// import { createBrowserHistory } from 'history';
import App from "./App";
import A from "./pages/a";
import B from "./pages/b";
import * as serviceWorker from "./serviceWorker";
import RouterWrap from "./router";

import { createBrowserHistory, createHashHistory } from "./history";

const history = createBrowserHistory();
// const history = createHashHistory();

// const history = createBrowserHistory();

console.log("===>history", history);
// window.onpopstate = function(event) {
//     console.log(event);
// };

window.addEventListener("popstate", function(e) {
    console.log("===>e", e);
});

// ReactDOM.render(
//     <Router history={history}>
//         <Route exact path="/a" component={A}></Route>
//         <Route exact path="/b" component={B}></Route>
//     </Router>,
//     document.getElementById("root")
// );

ReactDOM.render(
    <Router history={history}>
        <Route exact path="/a" component={A}></Route>
        <Route exact path="/b" component={B}></Route>
    </Router>,
    document.getElementById("root")
);
// ReactDOM.render(<App></App>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
