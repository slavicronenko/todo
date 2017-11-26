import React, { Component } from 'react';
import './ToDoListItem.css';
import ToDoCheckbox from '../ToDoCheckbox';

export default class ToDoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item
    };
  }

  render() {
    return (
      <li className="ToDoListItem">
        <div className="ToDoListItem__handler"></div>
        <div className="ToDoListItem__done">
          <ToDoCheckbox disabled={this.state.item.disabled} checked={this.state.item.checked}></ToDoCheckbox>
        </div>
        <div className="ToDoListItem__text">{this.state.item.text}</div>
        <div className="ToDoListItem__menu"></div>
      </li>
    );
  }
}
