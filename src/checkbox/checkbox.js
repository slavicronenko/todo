import React, { Component } from 'react';
import './checkbox.css';

export default class ToDoCheckbox extends Component {
  constructor() {
    super();

    const {
      checked = false,
      disabled = false
    } = this.props || {};

    Object.assign(this, {
      state: {
        checked,
        disabled
      },
      handleChange: this.handleChange.bind(this)
    });
  }

  handleChange(event) {
    this.setState({
      checked: event.target.checked
    });
    if (this.props.onChange) {
      this.props.onChange(event.target.checked);
    }
  }

  render() {
    return (
      <label className="to-do-checkbox">
        <input type="checkbox"
               checked={this.state.checked}
               disabled={this.state.disabled}
               onChange={this.handleChange} />
        <small></small>
      </label>
    );
  }
}
