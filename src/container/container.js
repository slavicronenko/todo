import { createStore } from 'redux';
import { connect } from 'react-redux'
import todoApp from '../app.reducer';
import ToDoList from '../list'

const store = createStore(todoApp);

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
};

const ToDoContainer = connect(
  mapStateToProps
)(ToDoList, store);

export default ToDoContainer;