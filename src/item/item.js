import React, { Component } from 'react';
import './item.css';
import ToDoCheckbox from '../checkbox';
import { getClasses } from "../helper";
import { FormControl } from 'react-bootstrap';

export default class ToDoItem extends Component {
  componentDidUpdate(prevProps){
    if (!prevProps.isEdited && this.props.isEdited) {
      this.input.focus();
      this.input.setSelectionRange(this.input.value.length, this.input.value.length);
    }
  }

  onKeyPress(event) {
    console.log(event);
  }

  render() {
    const {
      item,
      isEdited,
      editInputValue,
      onEditInputChange,
      onToggleTodo,
      onDeleteTodo,
      onDoubleClickTodo,
      onBlurTodo
    } = this.props;

    const itemClasses = getClasses({
      'to-do-item': true,
      'completed': item.completed
    });

    const content = isEdited
      ? <FormControl type="text" className="to-do-item__input"
                     maxLength={255}
                     value={editInputValue}
                     inputRef={input => this.input = input }
                     onBlur={() => onBlurTodo()}
                     onKeyPress={this.onKeyPress.bind(this)}
                     onChange={(event) => onEditInputChange(event.target.value)}/>
      : <span className="to-do-item__text" onDoubleClick={() => onDoubleClickTodo(item)}>{item.text}</span>;

    return (
      <li className={itemClasses}>
        <div className="to-do-item__done">
          <ToDoCheckbox checked={item.completed} onChange={() => onToggleTodo(item.id)} />
        </div>
        <div className="to-do-item__content">{content}</div>
        <div className="to-do-item__delete" onClick={() => onDeleteTodo(item.id)}></div>
      </li>
    );
  }
}
