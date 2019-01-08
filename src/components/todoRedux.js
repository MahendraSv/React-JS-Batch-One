import React from 'react';
import { connect } from "react-redux";
import { addTodo, deleteTodo } from '../redux/actions/todoActions';

function mapStateToProps(store) {
  return {
    todos: store.todos
  };
}

class TodoRedux extends React.Component {
  state = {
    newText: ''
  };

  handleChange = (e) => {
    this.setState({
      newText: e.target.value
    });
  };

  handleClick = () => {
    // this.props.dispatch(addTodo(this.state.newText));
    this.props.dispatch(addTodo(this.input.value));
    this.setState({newText: ''});
  }

  deleteTodo = (i) => {
    this.props.dispatch(deleteTodo(i));
  }

  getCompletedTodos = () => {
    return this.props.todos.filter(todo => todo.completed).length;
  };

  render() {
    let { todos } = this.props;
    return (
      <div>
        <h1> Todo - with Redux</h1>
        {/* Text: <input type="text" onChange={this.handleChange} value={this.state.newText} /> */}
        Text: <input type="text" ref={input => this.input = input}/>
        {/* Text: <input type="text" ref='inputRef'/> */}
        <button className="btn btn-success" onClick={this.handleClick}>Add</button>
        <h3>Todos: ({this.getCompletedTodos()} / {this.props.todos.length})</h3>
        <ul>
        {
          todos.map((todo, i) => <li key={todo.text}>{todo.text} <button onClick={() => this.deleteTodo(i)}>x</button></li>)
        }
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(TodoRedux);