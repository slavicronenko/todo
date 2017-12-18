export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const UPDATE_NEW_ITEM_TEXT = 'UPDATE_NEW_ITEM_TEXT';

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

export function updateNewItemText(text) {
  return {
    type: UPDATE_NEW_ITEM_TEXT,
    text
  }
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  }
}