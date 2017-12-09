import React, { Component } from 'react';
import './item.css';
import ToDoCheckbox from '../checkbox';

export default class ToDoItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <li className="to-do-item">
        <div className="to-do-item__done">
          <ToDoCheckbox checked={item.completed}></ToDoCheckbox>
        </div>
        <div className="to-do-item__text">{item.text}</div>
      </li>
    );
  }
}
