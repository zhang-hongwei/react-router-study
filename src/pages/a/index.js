import React, { Component } from "react";
// import
import MyContext from "../context/mycontext";

class A extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // console.log("a===>props", this.props);
    }

    render() {
        return (
            <MyContext.Consumer className="123">
                {value => {
                    // console.log("====>value", value);
                    return <div>'测试A页面' {value.val}</div>;
                }}
            </MyContext.Consumer>
        );
    }
}
export default A;
