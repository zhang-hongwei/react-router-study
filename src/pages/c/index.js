import React, { Component } from 'react';
import { connect } from '../../packages/react-redux';
import axios from 'axios';
import { add } from '../../store/actions/actions';
import Counter from './counts';

import { getList } from '../../http/index';
// import store from "../../store/index";
// import PropTypes from 'prop-types'
class C extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        // store.subscribe(e => {
        //     // console.log("==============e==>", e);
        //     this.getState(e);
        // });
    }

    handleClick2 = () => {
        this.props.dispatch({
            type: 'ADD_C_NUM',
            payload: { num: Math.random() }
        });
    };

    handleClick1 = () => {
        // const { userId, dispatch } = this.props;
        this.props.dispatch({
            type: 'USER_FETCH_REQUESTED',
            payload: Math.random()
        });
    };

    handleClick3 = () => {
        // let state = store.getState();
        // store.dispatch({
        //     type: "ADD_C_NUM",
        //     payload: Math.random()
        // });
    };

    getState = e => {
        // let state = store.getState();
        // console.log('监听state===>', state);
    };

    render() {
        const { c = { data: [] }, num = 0 } = this.props;

        return (
            <div>
                <button onClick={this.handleClick1}>click=>getList</button>
                <button onClick={this.handleClick2}>click=>getRandomNum</button>
                <button onClick={this.handleClick3}>click=>3</button>
                <div>{num}</div>
            </div>
        );
    }
}

export default connect(state => {
    console.log('================>>>state1', state);
    return state;
})(C);
// export default C;
