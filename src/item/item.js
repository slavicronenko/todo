import React, { Component } from 'react';
import './item.css';
import ToDoCheckbox from '../checkbox';
import { getClasses } from "../utility";

export default class ToDoItem extends Component {
  render() {
    const {
      item,
      onToggleTodo,
      onDeleteTodo
    } = this.props;

    const itemClasses = getClasses({
      'to-do-item': true,
      'completed': item.completed
    });

    return (
      <li className={itemClasses}>
        <div className="to-do-item__done">
          <ToDoCheckbox checked={item.completed} onChange={() => onToggleTodo(item.id)} />
        </div>
        <div className="to-do-item__text">{item.text}</div>
        <div className="to-do-item__delete" onClick={() => onDeleteTodo(item.id)}></div>
      </li>
    );
  }
}
