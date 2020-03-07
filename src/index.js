import React from "react";
import ReactDOM from "react-dom";
// import { Router, Route, Switch, Link } from 'react-router-dom';
import { Router, Route } from "./packages/react-router";
import "./index.css";
import App from "./App";
import A from "./pages/a";
import B from "./pages/b";
import C from "./pages/c";
import * as serviceWorker from "./serviceWorker";
import RouterWrap from "./router";
import { createBrowserHistory, createHashHistory } from "./packages/history";
import Link from "./packages/react-router/Link";
import { Provider } from "./packages/react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducers from "./store/reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import mySaga from "./store/saga/saga";
import store from "./store/index";

// window.addEventListener("popstate", e => {
//     console.log("popChange===>", e);
// });

// window.onpopstate = function(event) {
//     alert(
//         "location: " +
//             document.location +
//             ", state: " +
//             JSON.stringify(event.state)
//     );
// };

// console.log("=A===>", A.name);

// import { helloSaga } from "./store/saga/saga";

// const sagaMiddleware = createSagaMiddleware();

const history = createBrowserHistory();
// const history = createHashHistory();

// console.log("history====>", history);

// const logger = createLogger()
// const store = createStore(rootReducers, applyMiddleware(logger));

// window.store = store.getState();

// ReactDOM.render(
//     <Provider store={store}>
//         <App></App>
//     </Provider>,
//     document.getElementById("root")
// );

// ReactDOM.render(<App></App>, document.getElementById("root"));

// sagaMiddleware.run(mySaga);

// ReactDOM.render(
//     <Router history={history}>
//         <Route exact path="/a" component={A}></Route>
//         <Route exact path="/b" component={B}></Route>
//     </Router>,
//     document.getElementById("root")
// );
// ReactDOM.render(
//     <>
//         <A></A>
//         <B></B>
//     </>,
//     document.getElementById("root")
// );

// const handleClick = () => {
//     console.log(1);
// };

ReactDOM.render(
    <Router history={history}>
        <Link
            to="/a"
            style={{
                width: "100px",
                color: "red",
                display: "block",
                border: "1px solid red"
            }}
        >
            a
        </Link>
        <br />
        <Link
            to="/b"
            style={{
                width: "100px",
                color: "red",
                display: "block",
                border: "1px solid red"
            }}
        >
            b
        </Link>
        <br />
        <Route exact path="/a" component={A}></Route>
        <Route exact path="/b" component={B}></Route>
    </Router>,
    document.getElementById("root")
);
// ReactDOM.render(
//     <C>
//         <div>child1</div>
//         <div>child2</div>
//     </C>,
//     document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
