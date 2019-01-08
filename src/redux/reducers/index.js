import { combineReducers } from 'redux';

import applicationReducer from './applicationReducer';
import countReducer from './countReducer';
import todoReducer from './todoReducer';

export default combineReducers({
  application: applicationReducer,
  count: countReducer,
  todos: todoReducer
});