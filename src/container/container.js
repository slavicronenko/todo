import { createStore } from 'redux';
import { connect } from 'react-redux'
import todoApp from '../app.reducer';
import ToDoList from '../list'
import { toggleTodo } from '../app.actions';

const store = createStore(todoApp);

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTodo: (id) => dispatch(toggleTodo(id))
  };
};

const ToDoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList, store);

export default ToDoContainer;