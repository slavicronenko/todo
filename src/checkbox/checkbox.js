import React, { Component } from 'react';
import './checkbox.css';

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
      <label className="to-do-checkbox">
        <input type="checkbox" checked={checked} disabled={disabled} onChange={this.onChange} />
        <small></small>
      </label>
    );
  }
}
