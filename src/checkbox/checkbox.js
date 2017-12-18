import React, { Component } from 'react';
import './checkbox.css';

export default class ToDoCheckbox extends Component {
  render() {
    const {
      checked = false,
      disabled = false,
      onChange
    } = this.props;

    return (
      <label className="to-do-checkbox">
        <input type="checkbox"
               checked={checked}
               disabled={disabled}
               onChange={onChange} />
        <small></small>
      </label>
    );
  }
}
