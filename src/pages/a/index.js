import React, { Component } from "react";
// import
import { connect } from "../../packages/react-redux";
import MyContext from "../context/mycontext";
import { store1 } from "../../index";

class A extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("a===>props", this.props);
        // store1.subscribe(e => {
        //     console.log(e);
        // });
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

    render() {
        console.log(this.props);
        return (
            <div className="123">
                a
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
