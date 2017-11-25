import React, { Component } from 'react';
import './ToDoListItem.css';
import ToDoCheckbox from '../ToDoCheckbox';

export default class ToDoListItem extends Component {
  render() {
    const {item} = this.props;

    return (
      <li className="ToDoListItem">
        <div className="ToDoListItem__handler"></div>
        <div className="ToDoListItem__done">
          <ToDoCheckbox></ToDoCheckbox>
        </div>
        <div className="ToDoListItem__text">{item.text}</div>
        <div className="ToDoListItem__menu"></div>
      </li>
    );
  }
}
