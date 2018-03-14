import React, { Component } from 'react';
import './list.css';
import ToDoItem from '../item';
import { getClasses } from '../helper';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export default class ToDoList extends Component {
  onDragEnd(result) {
    if (result.destination) {
      const {
        draggableId: id,
        destination: { index: destination }
      } = result;

      this.props.reorder(id, destination);
    }
  }

  render() {
    const { todos, isNoItems } = this.props;
    const listClasses = getClasses({
      'to-do-list': true,
      'no-items': isNoItems
    });

    return (
      <DragDropContext onDragEnd={this.onDragEnd.bind(this)}>
        <Droppable droppableId="root">
          {(provided) => (
            <div ref={provided.innerRef} className={listClasses}>
              {todos.map((item, index) => this.createTodoElement(item, index))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }

  createTodoElement(item, index) {
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
      index={index}
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
