import React, { Component } from "react";
// import
import MyContext from "../context/mycontext";
// import store from '../../store/index';
import { connect } from "../../packages/react-redux";



const B = props => {
    // console.log("===B===>", props);
    const { dispatch, num = 0 } = props;
    const handleClick = () => {
        // console.log('1========+>', 1);
        // dispatch({
        //     type: "ADD_B_NUM",
        //     payload: {
        //         num: Math.random()
        //     }
        // });

        console.log(window.history);
        // console.log(window.location);
        window.history.pushState(
            {
                foo: "bar"
            },
            "page",
            "/a"
        );
    };
    return (
        <div>
            <div>B 页面</div>

            <button onClick={handleClick}>click=>a</button>

            <div style={{ height: "30px" }}></div>

            <button onClick={handleClick}>click1</button>

            <div>{num}</div>
        </div>
    );
};

export default B;

// export default connect(state => {
//     // console.log('=======state===1>', state);
//     return state.b;
// })(B);
