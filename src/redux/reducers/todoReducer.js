const initialTodos = [
  { text: 'Learning React', completed: true },
  { text: 'Practicing React', completed: false }
];

function todoReducer(state = initialTodos, action) {
  switch(action.type) {
    case 'TODO_ADD':
      return [...state, { text: action.payload, completed: false }];
    case 'TODO_DELETE':
      let todos = [...state];
      todos.splice(action.payload, 1);
      return todos;
    default:
      return state;
  }
}

export default todoReducer;