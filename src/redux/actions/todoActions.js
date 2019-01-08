export function addTodo(payload) {
  return {
    type: 'TODO_ADD',
    payload
  };
}

export function deleteTodo(index) {
  return {
    type: 'TODO_DELETE',
    payload: index
  }
}