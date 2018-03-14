import React, { Component } from 'react';
import './item.css';
import { Draggable } from 'react-beautiful-dnd';
import ToDoCheckbox from '../checkbox';
import { FormControl } from 'react-bootstrap';
import {
  getClasses,
  ENTER_KEY,
  ESCAPE_KEY
} from '../helper';
import { TODO_STATUS } from '../app.reducer';

export default class ToDoItem extends Component {
  componentDidUpdate(prevProps) {
    const {isEdited: isCurrentlyEditing} = this.props;
    const {isEdited: edited} = prevProps;

    if (!edited && isCurrentlyEditing) {
      const inputValueLength = this.input.value.length;

      this.input.focus();
      this.input.setSelectionRange(inputValueLength, inputValueLength);
    }
  }

  onKeyDown(event) {
    const {
      updateTodoText,
      cancelEditing
    } = this.props;

    if (event.which === ENTER_KEY) {
      updateTodoText();
    } else if (event.which === ESCAPE_KEY) {
      cancelEditing();
    }
  }

  onBlur(event) {
    const {
      updateTodoText,
      cancelEditing
    } = this.props;

    if (event.target.value) {
      updateTodoText();
    } else {
      cancelEditing();
    }
  }

  render() {
    const {
      item,
      index,
      isEdited,
      editInputValue,
      updateEditedItemText,
      toggleTodo,
      deleteTodo,
      enableEditMode
    } = this.props;

    const itemClasses = getClasses({
      'to-do-item': true,
      [item.status]: true
    });

    const content = isEdited
      ? <FormControl type="text" className="to-do-item__input"
                     maxLength={255}
                     value={editInputValue}
                     inputRef={input => this.input = input}
                     onBlur={this.onBlur.bind(this)}
                     onKeyDown={this.onKeyDown.bind(this)}
                     onChange={(event) => updateEditedItemText(event.target.value)}/>
      : <span className="to-do-item__text" onDoubleClick={() => enableEditMode(item)}>{item.text}</span>;

    return (
      <Draggable draggableId={item.id} index={index}>
        {(provided) => (
          <div>
            <div className={itemClasses}
                 ref={provided.innerRef}
                 {...provided.draggableProps}
                 {...provided.dragHandleProps}>
              <div className="to-do-item__done">
                <ToDoCheckbox checked={this.isTodoCompleted(item)} onChange={() => toggleTodo(item.id)}/>
              </div>
              <div className="to-do-item__content">{content}</div>
              <div className="to-do-item__delete" onClick={() => deleteTodo(item.id)}></div>
            </div>
            {provided.placeholder}
          </div>
        )}
      </Draggable>
    );
  }

  isTodoCompleted(todo) {
    return todo.status === TODO_STATUS.COMPLETED;
  }
}
