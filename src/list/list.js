import React, { Component } from 'react';
import './list.css';
import ToDoItem from '../item';
import { getClasses } from '../helper';

export default class ToDoList extends Component {
  render() {
    const { todos } = this.props;
    const listClasses = getClasses({
      'to-do-list': true,
      'no-items': !todos.length
    });

    return (
      <ul className={listClasses}>
        {todos.map((item) => this.createTodoElement(item))}
      </ul>
    );
  }

  createTodoElement(item) {
    const {
      editedItem,
      onToggleTodo,
      onDeleteTodo,
      onDoubleClickTodo,
      onEditInputChange,
      onBlurTodo
    } = this.props;

    return <ToDoItem
      item={item}
      key={item.id}
      isEdited={item.id === editedItem.id}
      editInputValue={editedItem.text}
      onToggleTodo={onToggleTodo}
      onDeleteTodo={onDeleteTodo}
      onDoubleClickTodo={onDoubleClickTodo}
      onEditInputChange={onEditInputChange}
      onBlurTodo={onBlurTodo} />;
  }
}
