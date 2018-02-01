export const ADD_TODO = 'ADD_TODO';
export const UPDATE_NEW_ITEM_TEXT = 'UPDATE_NEW_ITEM_TEXT';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const ENABLE_EDIT_MODE = 'ENABLE_EDIT_MODE';
export const UPDATE_EDITED_ITEM_TEXT = 'UPDATE_EDITED_ITEM_TEXT';
export const UPDATE_TODO_TEXT = 'UPDATE_TODO_TEXT';
export const CANCEL_EDITING = 'CANCEL_EDITING';
export const UPDATE_FILTER = 'UPDATE_FILTER';
export const SET_TODOS = 'SET_TODOS';

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

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id
  }
}

export function enableEditMode(item) {
  return {
    type: ENABLE_EDIT_MODE,
    item
  }
}

export function updateEditedItemText(text) {
  return {
    type: UPDATE_EDITED_ITEM_TEXT,
    text
  }
}

export function updateTodoText() {
  return {
    type: UPDATE_TODO_TEXT
  }
}

export function cancelEditing() {
  return {
    type: CANCEL_EDITING
  }
}

export function showAllTodos() {
  return {
    type: UPDATE_FILTER,
    value: ''
  }
}

export function updateFilter(value) {
  return {
    type: UPDATE_FILTER,
    value
  }
}

export function setTodos(todos) {
  return {
    type: SET_TODOS,
    todos
  }
}
