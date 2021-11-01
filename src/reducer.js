import { combineReducers } from 'redux';
import todosReducer from './features/todos/todoSlice';
import filtersReducer from './features/filters/filtersSlice';

// export default function rootReducer (state = {}, action) {
//   return {
//     todos: todosReducer(state.todos, action),
//     filters: filtersReducer(state.filters, action)
//   }
// }

// insted of doing this we can make use of teh redux core library for combining he reducers

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer
})

export const rootReducer;
