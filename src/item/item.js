import React, { Component } from 'react';
import './item.css';
import ToDoCheckbox from '../checkbox';

export default class ToDoItem extends Component {
  render() {
    const {
      item,
      onToggleTodo
    } = this.props;

    return (
      <li className="to-do-item">
        <div className="to-do-item__done">
          <ToDoCheckbox checked={item.completed} onChange={() => onToggleTodo(item.id)} />
        </div>
        <div className="to-do-item__text">{item.text}</div>
      </li>
    );
  }
}
