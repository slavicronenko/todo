import {
  getNextIndex,
  trimSpaces
} from './helper';
import {
  ADD_TODO,
  UPDATE_NEW_ITEM_TEXT,
  TOGGLE_TODO,
  DELETE_TODO,
  ENABLE_EDIT_MODE,
  UPDATE_EDITED_ITEM_TEXT,
  UPDATE_TODO_TEXT
} from './app.actions';

const initialState = {
  newItemText: '',
  editedItem: {
    id: null,
    text: ''
  },
  todos: []
};

export default function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          getNewTodoItem(trimSpaces(action.text), state.todos),
          ...state.todos
        ]
      });

    case UPDATE_NEW_ITEM_TEXT:
      return Object.assign({}, state, { newItemText: action.text });

    case TOGGLE_TODO: {
      const todos = state.todos.map((todo) => todo.id === action.id ? {...todo, completed: !todo.completed} : todo);

      return Object.assign({}, state, { todos });
    }

    case DELETE_TODO:
      return Object.assign({}, state, { todos: state.todos.filter((todo) => todo.id !== action.id) });

    case ENABLE_EDIT_MODE: {
      const { id, text } = action.item;

      return Object.assign({}, state, { editedItem: { id, text } });
    }

    case UPDATE_EDITED_ITEM_TEXT:{
      const { editedItem } = state;

      return Object.assign({}, state, {
        editedItem: Object.assign({}, editedItem, { text: action.text })
      });
    }

    case UPDATE_TODO_TEXT: {
      const { editedItem } = state;
      const todos = [...state.todos];

      if (editedItem.text) {
        todos.find((todo) => todo.id === editedItem.id).text = trimSpaces(editedItem.text);
      }

      return Object.assign({}, state, {
        editedItem: initialState.editedItem,
        todos
      });
    }

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
