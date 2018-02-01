import { getNextIndex } from './helper';
import {
  ADD_TODO,
  UPDATE_NEW_ITEM_TEXT,
  TOGGLE_TODO,
  DELETE_TODO,
  ENABLE_EDIT_MODE,
  UPDATE_EDITED_ITEM_TEXT,
  UPDATE_TODO_TEXT,
  CANCEL_EDITING,
  UPDATE_FILTER, SET_TODOS
} from './app.actions';

const initialState = {
  newItemText: '',
  editedItem: {
    id: null,
    text: ''
  },
  todos: [],
  filter: '',
  settings: {
    delimiter: ';'
  }
};

export function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const todos = [...state.todos];
      const { delimiter } = state.settings;

      action.text.split(delimiter).forEach((text) => {
        const trimmedText = text.trim();

        if (trimmedText) {
          todos.unshift(getNewTodoItem(trimmedText, todos));
        }
      });

      return Object.assign({}, state, { todos });

    case UPDATE_NEW_ITEM_TEXT:
      return Object.assign({}, state, { newItemText: action.text });

    case TOGGLE_TODO: {
      const todos = state.todos.map((todo) => todo.id === action.id ? toggleTodoStatus(todo) : todo);

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
        todos.find((todo) => todo.id === editedItem.id).text = editedItem.text.trim();
      }

      return Object.assign({}, state, {
        editedItem: initialState.editedItem,
        todos
      });
    }

    case CANCEL_EDITING: {
      return Object.assign({}, state, { editedItem: initialState.editedItem });
    }

    case UPDATE_FILTER: {
      return Object.assign({}, state, { filter: action.value });
    }

    case SET_TODOS: {
      return Object.assign({}, state, { todos: action.todos });
    }

    default:
      return state
  }
}

export function getFilteredTodos(state) {
  const {
    todos,
    filter
  } = state;

  return filter
    ? todos.filter((todo) => todo.status === filter)
    : todos;
}

function getNewTodoItem(text, items) {
  return {
    id: getNextIndex(items),
    text,
    status: TODO_STATUS.ACTIVE
  };
}

function toggleTodoStatus(todo) {
  return Object.assign({}, todo, {
    status: todo.status === TODO_STATUS.ACTIVE
      ? TODO_STATUS.COMPLETED
      : TODO_STATUS.ACTIVE
  });
}

export const TODO_STATUS = {
  ACTIVE: 'active',
  COMPLETED: 'completed'
};
