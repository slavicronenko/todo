import { getNextIndex } from './utility';
import { ADD_TODO } from './app.actions';

const initialState = {
  todos: []
};

export default function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          getNewTodoItem(action.text, state.todos)
        ]
      });
    default:
      return state
  }
}

function getNewTodoItem(text, items) {
  return {
    id: getNextIndex(items),
    text,
    completed: false,
    disabled: false
  };
}