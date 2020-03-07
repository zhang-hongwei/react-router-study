import React, { Component } from "react";
// import
import MyContext from "../context/mycontext";

class A extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("a===>props", this.props);
    }

    handleClick = () => {

        window.history.pushState(
            {
                foo: "bar"
            },
            "page",
            "/b"
        );
    };

    render() {
        return (
            <div className="123">
                a
                <br />
                <button onClick={() => this.handleClick()}>click=>b</button>
            </div>
        );
    }
}
export default A;

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
