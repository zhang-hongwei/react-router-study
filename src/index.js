import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Switch, Link } from 'react-router-dom';
import { Router, Route } from './react-router';
import './index.css';
import App from './App';
import A from './pages/a';
import B from './pages/b';
import C from './pages/c';
import * as serviceWorker from './serviceWorker';
import RouterWrap from './router';
import { createBrowserHistory, createHashHistory } from './history';
import Link from './react-router/Link';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import store from "./store"

const reducers = function(state = { num: 1 }, action) {
    return {
        ...state,
        text: '新state'
    };
};

const history = createBrowserHistory();

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('root')
);

// ReactDOM.render(
//     <Router history={history}>
//         <Route exact path="/a" component={A}></Route>
//         <Route exact path="/b" component={B}></Route>
//     </Router>,
//     document.getElementById("root")
// );

// const handleClick = () => {
//     console.log(1);
// };

// ReactDOM.render(
//     <Router history={history}>
//         <Link to="/a">a</Link>
//         <br />
//         <Link to="/b">b</Link>
//         <br />
//         <Route exact path="/a" component={A}></Route>
//         <Route exact path="/b" component={B}></Route>
//     </Router>,
//     document.getElementById('root')
// );
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
