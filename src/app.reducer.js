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
          getNewTodoItem(action.text)
        ]
      });
    default:
      return state
  }
}

function getNewTodoItem(text) {
  return {
    text: text,
    completed: false,
    disabled: false
  };
}