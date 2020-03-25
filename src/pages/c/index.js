import React, { Component } from "react";
import { connect } from "../../packages/react-redux";
import axios from "axios";
import { add } from "../../store/actions/actions";
import Counter from "./counts";
import { _ } from "underscore";
import { getList } from "../../http/index";
import D from "./components/D";
import H from "./components/H";
import immutable from "immutable";
import Info from "./components/info";
const { Map, List } = immutable;
class C extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: { b: 1 },
            b: immutable.fromJS({ a: 123 }),
            goodsName: "",
            goods_price: "",
            cart: List([])
        };

        this.obj = {
            a: "1",
            b: 2134,
            c: {
                a: 1
            },
            d: new Date()
        };
    }

    handleClick = () => {
        // let a = _.clone(this.obj);
        // a.name = "测试";
        // a.a = 123123123;
        // this.setState({
        //     b: this.state.b.update("a", Math.random())
        // });
        const goodsName = this.refs.goods_name.value;
        const goodsPrice = this.refs.goods_price.value;
        const newCart = this.state.cart.push({
            name: goodsName,
            value: goodsPrice
        });
        this.setState({
            cart: newCart
        });
    };
    render() {
        const { c = { data: [] }, num = 0 } = this.props;

        return (
            <div>
                name : <input type="text" ref="goods_name" />
                <br />
                price : <input type="text" ref="goods_price" />
                <br />
                <button onClick={this.handleClick}>保存</button>
                <br />
                <Info cart={this.state.cart}></Info>
            </div>
        );
    }
}

export default connect(state => {
    return state;
})(C);
// export default C;
