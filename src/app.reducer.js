import { getNextIndex } from './utility';
import {
  ADD_TODO,
  UPDATE_NEW_ITEM_TEXT,
  TOGGLE_TODO,
  DELETE_TODO
} from './app.actions';

const initialState = {
  newItemText: '',
  todos: []
};

export default function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          getNewTodoItem(action.text, state.todos),
          ...state.todos
        ]
      });
    case UPDATE_NEW_ITEM_TEXT:
      return Object.assign({}, state, { newItemText: action.text });
    case TOGGLE_TODO:
      const todos = state.todos.map((todo) => todo.id === action.id ? {...todo, completed: !todo.completed} : todo);

      return Object.assign({}, state, { todos });
    case DELETE_TODO:
      return Object.assign({}, state, { todos: state.todos.filter((todo) => todo.id !== action.id) });
    default:
      return state
  }
}

function getNewTodoItem(text, items) {
  return {
    id: getNextIndex(items),
    text,
    completed: false
  };
}