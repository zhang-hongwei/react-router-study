import React, { Component } from "react";
// import
import MyContext from "../context/mycontext";
import store from "../../store/index";

const B = () => {
    const handleClick = () => {
        store.dispatch({
            type: "ADD_B_NUM",
            payload: "测试=======================》》》b"
        });
    };
    return (
        <MyContext.Consumer className="123">
            {value => {
                // console.log('====>value', value);
                return (
                    <div>
                        '测试B页面' {value.val}
                        <div>
                            <button onClick={handleClick}>click</button>
                        </div>
                    </div>
                );
            }}
        </MyContext.Consumer>
    );
};

export default B;
