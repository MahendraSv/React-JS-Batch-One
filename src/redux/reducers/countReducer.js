function countReducer(state = 0, action) {
  switch(action.type) {
    case 'COUNTER_INC':
      return state + 1;
    case 'COUNTER_DEC':
      return state - 1;
    case 'COUNTER_RESET':
      return 0;
    default:
    return state;    
  }
}

export default countReducer;