import React from 'react';

import { connect } from "react-redux";

import { increment, decrement } from "./../redux/actions/counterActions";

function mapStoreToProps(store) {
  return {
    count: store.count
  };
}

class Counter extends React.Component {
  handleClick = (e) => {
    this.props.dispatch(increment());
  };

  decrementClick = () => {
    this.props.dispatch(decrement())
  }

  resetClick = () => {
    this.props.dispatch({
      type: 'COUNTER_RESET'
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button className="btn btn-info" onClick={this.handleClick} >INC</button>
        <button className="btn btn-danger" onClick={this.decrementClick}>DEC</button>
        <button className="btn btn-default" onClick={this.resetClick}>RESET</button>
      </div>
    );
  }
}

export default connect(
  mapStoreToProps
)(Counter);