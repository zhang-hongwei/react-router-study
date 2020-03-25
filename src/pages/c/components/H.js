import React, { Component } from "react";
import immutable from "immutable";

const H = props => {
    console.log("H===>", props);
    return <div>hhhhhhhhh</div>;
};

export default React.memo(H, (next, pre) => {
    return !immutable.is(next, pre);
});
