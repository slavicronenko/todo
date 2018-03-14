import { createStore } from 'redux';
import { connect } from 'react-redux'
import {
  todoApp,
  getFilteredTodos
} from '../app.reducer';
import ToDoList from '../list'
import {
  toggleTodo,
  deleteTodo,
  enableEditMode,
  updateEditedItemText,
  updateTodoText,
  cancelEditing,
  reorder
} from '../app.actions';

const store = createStore(todoApp);

const mapStateToProps = (state) => {
  return {
    editedItem: state.editedItem,
    todos: getFilteredTodos(state),
    isNoItems: !state.todos.length
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    enableEditMode: (item) => dispatch(enableEditMode(item)),
    updateEditedItemText: (text) => dispatch(updateEditedItemText(text)),
    updateTodoText: () => dispatch(updateTodoText()),
    cancelEditing: () => dispatch(cancelEditing()),
    reorder: (id, destination) => dispatch(reorder(id, destination))
  };
};

const ToDoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList, store);

export default ToDoContainer;
