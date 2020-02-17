import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types'
class C extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleClick = () => {
        console.log('===>', this.props);
        this.props.dispatch({ type: 'ADD_NUM', payload: Math.random() });
    };
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>click</button>
            </div>
        );
    }
}

export default connect()(C);
