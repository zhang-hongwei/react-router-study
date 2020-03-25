import React, { Component } from "react";
import immutable from "immutable";

const { is } = immutable;
class Info extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextprops) {
        return !is(nextprops.cart, this.props.cart);
    }

    render() {
        const { cart = {} } = this.props;
        let list = [];
        this.props.cart.forEach((item, key) => {
            // list.push();
            console.log("immutable====>", item, key);
        });
        return <div></div>;
    }
}

export default Info;
