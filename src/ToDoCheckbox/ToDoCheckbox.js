import React, { Component } from 'react';
import './ToDoCheckbox.css';

export default class ToDoCheckbox extends Component {
  render() {
    return (
      <label className="ToDoCheckbox">
        <input type="checkbox" />
        <small></small>
      </label>
    );
  }
}
