import React, { Component } from 'react';
import './ToDoCheckbox.css';

export default class ToDoCheckbox extends Component {
  onChange(value) {
    console.log(value);
  }

  render() {
    const {
      disabled,
      checked
    } = this.props;

    return (
      <label className="ToDoCheckbox">
        <input type="checkbox" checked={checked} disabled={disabled} onChange={this.onChange} />
        <small></small>
      </label>
    );
  }
}
