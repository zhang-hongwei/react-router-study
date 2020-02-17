import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Switch, Link } from 'react-router-dom';
import { Router, Route } from './react-router';
import './index.css';

// import { Router, Route } from 'react-router';
// import { createBrowserHistory } from 'history';
<<<<<<< HEAD
import App from './App';
import A from './pages/a';
import B from './pages/b';
import * as serviceWorker from './serviceWorker';
import RouterWrap from './router';

import { createBrowserHistory, createHashHistory } from './history';
import Router1 from './pages/context/context.js';
import Mycontext from './pages/context/mycontext';
=======
import App from "./App";
import A from "./pages/a";
import B from "./pages/b";
import C from "./pages/c";
import * as serviceWorker from "./serviceWorker";
import RouterWrap from "./router";

import { createBrowserHistory, createHashHistory } from "./history";
import Link from "./react-router/Link";
>>>>>>> 9839febd3aba17a2745eadc13e04fdb311ba7572

const history = createBrowserHistory();
// const history = createHashHistory();

// const history = createBrowserHistory();

<<<<<<< HEAD
console.log('===>history', history);
=======
// console.log("===>history", history);
>>>>>>> 9839febd3aba17a2745eadc13e04fdb311ba7572
// window.onpopstate = function(event) {
//     console.log(event);
// };

window.addEventListener('popstate', function(e) {
    console.log('===>e', e);
});

// ReactDOM.render(
//     <Router history={history}>
//         <Route exact path="/a" component={A}></Route>
//         <Route exact path="/b" component={B}></Route>
//     </Router>,
//     document.getElementById("root")
// );

const handleClick = () => {
    console.log(1);
};

ReactDOM.render(
    <Router history={history}>
<<<<<<< HEAD
        <div>123</div>
=======
        <Link to="/a">a</Link>
        <br />
        <Link to="/b">b</Link>
        <br />
>>>>>>> 9839febd3aba17a2745eadc13e04fdb311ba7572
        <Route exact path="/a" component={A}></Route>
        <Route exact path="/b" component={B}></Route>
    </Router>,
    document.getElementById('root')
);
// ReactDOM.render(
<<<<<<< HEAD
//     <Router1>
//         <A></A>
//     </Router1>,
//     document.getElementById('root')
=======
//     <C>
//         <div>child1</div>
//         <div>child2</div>
//     </C>,
//     document.getElementById("root")
>>>>>>> 9839febd3aba17a2745eadc13e04fdb311ba7572
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
