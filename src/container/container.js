import { createStore } from 'redux';
import { connect } from 'react-redux'
import todoApp from '../app.reducer';
import ToDoList from '../list'
import {
  toggleTodo,
  deleteTodo,
  enableEditMode,
  updateEditedItemText,
  updateTodoText
} from '../app.actions';

const store = createStore(todoApp);

const mapStateToProps = (state) => {
  return {
    editedItem: state.editedItem,
    todos: state.todos
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTodo: (id) => dispatch(toggleTodo(id)),
    onDeleteTodo: (id) => dispatch(deleteTodo(id)),
    onDoubleClickTodo: (item) => dispatch(enableEditMode(item)),
    onEditInputChange: (text) => dispatch(updateEditedItemText(text)),
    onBlurTodo: () => dispatch(updateTodoText())
  };
};

const ToDoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList, store);

export default ToDoContainer;