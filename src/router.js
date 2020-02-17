import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import renderRoutes from './rederRouter';
// path: '/userRetain',
// exact: true,
// component: require('../userRetain/index.js').default,
// _title: 'X-Man运营分析',
// _title_default: 'X-Man运营分析',

const routeList = [
    {
        path: '/a',
        component: require('./pages/a').default,
        _title: 'A 页面',
        _title_default: 'A 页面 defalut',
        exact: true,
        key: '1'
    },
    {
        path: '/b',
        component: require('./pages/b').default,
        _title: 'B 页面',
        _title_default: 'B 页面 default',
        exact: true,
        key: '2'
    },
    {
        path: '/c',
        component: require('./pages/c').default,
        _title: 'c 页面',
        _title_default: 'c 页面 default',
        exact: true,
        key: '3'
    }
];

function RouterWrap() {
    // const [val, setval] = useState(0);
    return (
        <Router>
            <Link to="/a">a</Link>
            <br />
            <Link to="/b">b</Link>
            <br />
            <Link to="/c">c</Link>
            {/* {routeList.map((item, key) => {
        const { component: Component } = item;
        return <Route key={key} exact path={item.path} render={() => <Component></Component>} />;
      })} */}
            {renderRoutes(routeList, {})}
        </Router>
    );
}

export default RouterWrap;
