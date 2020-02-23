import React, { Component } from 'react';
// import
import MyContext from '../context/mycontext';
// import store from '../../store/index';
import { connect } from '../../packages/react-redux';

const B = ({ dispatch, num = 0 }) => {
    const handleClick = () => {
        console.log('1========+>', 1);
        dispatch({
            type: 'ADD_B_NUM',
            payload: {
                num: Math.random()
            }
        });
    };
    return (
        <div>
            <div>B 页面</div>

            <div style={{ height: '30px' }}></div>

            <button onClick={handleClick}>click1</button>

            <div>{num}</div>
        </div>
    );
};

// export default B;

export default connect(state => {
    console.log('=======state===1>', state);
    return state.b;
})(B);
