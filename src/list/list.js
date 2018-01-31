import React, { Component } from 'react';
import './list.css';
import ToDoItem from '../item';
import { getClasses } from '../helper';

export default class ToDoList extends Component {
  render() {
    const { todos, isNoItems } = this.props;
    const listClasses = getClasses({
      'to-do-list': true,
      'no-items': isNoItems
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
      toggleTodo,
      deleteTodo,
      enableEditMode,
      updateEditedItemText,
      updateTodoText,
      cancelEditing
    } = this.props;

    return <ToDoItem
      item={item}
      key={item.id}
      isEdited={item.id === editedItem.id}
      editInputValue={editedItem.text}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
      enableEditMode={enableEditMode}
      updateEditedItemText={updateEditedItemText}
      updateTodoText={updateTodoText}
      cancelEditing={cancelEditing} />;
  }
}
