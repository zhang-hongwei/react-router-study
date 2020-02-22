import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { add } from "../../store/actions/actions";
import Counter from "./counts";

import { getList } from "../../http/index";
import store from "../../store/index";
// import PropTypes from 'prop-types'
class C extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        store.subscribe(e => {
            // console.log("==============e==>", e);
            this.getState(e);
        });
    }

    handleClick2 = () => {
        this.props.dispatch({
            type: "GET_USER_INFO",
            payload: { userId: 123 }
        });
    };

    handleClick1 = () => {
        // const { userId, dispatch } = this.props;
        this.props.dispatch({
            type: "USER_FETCH_REQUESTED",
            payload: { userId: 123 }
        });
    };

    handleClick3 = () => {
        // let state = store.getState();

        store.dispatch({
            type: "ADD_C_NUM",
            payload: Math.random()
        });
    };

    getState = e => {
        let state = store.getState();

        console.log("监听state===>", state);
    };

    render() {
        const { c = { data: [] } } = this.props;

        return (
            <div>
                <button onClick={this.handleClick1}>click=>getList</button>
                <button onClick={this.handleClick2}>click=>getUserInfo</button>
                <button onClick={this.handleClick3}>click=>3</button>
                <div>
                    {c.data
                        ? c.data.map(item => {
                              return (
                                  <div key={item.id}>
                                      {item.name}-{item.id}
                                  </div>
                              );
                          })
                        : null}

                    <br />

                    <div>
                        <Counter></Counter>
                    </div>
                </div>
            </div>
        );
    }
}

// export default connect(state => {
//     console.log("================>>>state1", state);
//     return state;
// })(C);
export default C;
