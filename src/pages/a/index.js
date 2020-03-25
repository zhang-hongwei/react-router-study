import React, { Component } from "react";
// import
import { connect } from "../../packages/react-redux";
import MyContext from "../context/mycontext";
import { store1 } from "../../index";
// import { _ } from "../../packages/magic-box/utils/index";
import { _ } from "underscore";
import { throttle, debounce } from "../../packages/throttle";

function throttle1(method, context) {
    console.log(123);
    clearTimeout(method.tId);
    method.tId = setTimeout(function() {
        method.call(context);
    }, 100);
}

class A extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("a===>props", this.props);
        // store1.subscribe(e => {
        //     console.log(e);
        // });
        // let cookie1 = _.info.properties( window.navigator.userAgent);
        // let cookie2 = _.info.pageviewInfo( window.navigator.userAgent)
        // console.log("cookie=======1=>", cookie1);
        // console.log("cookie=======2=>", cookie2);
        let obj = {
            a: 1,
            b: "12323",
            f: new Date()
        };

        let copy = _.clone(obj);
        console.log("copy============>", copy);
    }

    handleClick = () => {
        // window.history.pushState(
        //     {
        //         foo: "bar"
        //     },
        //     "page",
        //     "/b"
        // );
        return;
        window.history.go(-1);
    };

    handleClick1 = () => {
        this.props.dispatch({
            type: "ADD_A_NUM",
            payload: Math.random()
        });
    };

    handleChange = e => {
        console.log("throttle1===123123===input>");
    };

    render() {
        console.log(this.props);
        return (
            <div className="123">
                a
                <br />
                <input
                    type="text"
                    onInput={debounce(this.handleChange, 1000)}
                />
                <br />
                <button onClick={() => this.handleClick()}>
                    返回B页面 go(-1)
                </button>
                <br />
                <button onClick={() => this.handleClick1()}>
                    返回B页面 pushState
                </button>
            </div>
        );
    }
}
// export default A;

export default connect(state => {
    console.log("state====a==>", state);
    return { ...state };
})(A);

// render() {
//     return (
//         <MyContext.Consumer className="123">
//             {value => {
//                 // console.log("====>value", value);
//                 return (
//                     <div onClick={this.handleClick}>
//                         '测试A页面' {value.val}
//                     </div>
//                 );
//             }}
//         </MyContext.Consumer>
//     );
// }
