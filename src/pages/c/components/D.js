import React from "react";
import pureRender from "pure-render-decorator";

@pureRender
class D extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentWillUpdate(){

    // }

    render() {
        console.log("D===>", this.props);
        return <div>dddd</div>;
    }
}

export default D;
