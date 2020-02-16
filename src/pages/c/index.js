import React, { Component } from "react";

class C extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        console.log("===>child", this.props);
    }
    render() {
        return <div children={this.props.children || null}></div>;
    }
}

export default C;
