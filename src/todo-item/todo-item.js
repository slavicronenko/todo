import React, { Component } from 'react';
import './todo-item.css';
import ToDoCheckbox from '../checkbox';

export default class ToDoItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <li className="to-do-item">
        <div className="to-do-item__handler"></div>
        <div className="to-do-item__done">
          <ToDoCheckbox disabled={item.disabled} checked={item.completed}></ToDoCheckbox>
        </div>
        <div className="to-do-item__text">{item.text}</div>
        <div className="to-do-item__menu"></div>
      </li>
    );
  }
}
