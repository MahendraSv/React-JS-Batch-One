import React from 'react';

class Second extends React.Component {

  state = {
    count: this.props.iValue ? parseInt(this.props.iValue) : 0
  };

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <span>No of Clicks: {this.state.count}</span>
        <br />
        <button onClick={this.handleClick} >Click</button>
      </div>
    );
  }
}

export default Second;