import React from 'react';

class TodoItem extends React.Component {

  deleteThisTodo = () => {
    this.props.del(this.props.id);
  };

  handleChechbox = () => {
    this.props.change(this.props.id);
  };

  render() {
    let { text, completed } = this.props.data;
    return (
      <div>
        <input type="checkbox" checked={completed} onChange={this.handleChechbox}  />
        {text}
        <button onClick={this.deleteThisTodo}>x</button>
      </div>
    );
  }
}

export default TodoItem;