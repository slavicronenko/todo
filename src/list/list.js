import React, { Component } from 'react';
import './list.css';
import ToDoItem from '../item';
import { getClasses } from '../utility';

export default class ToDoList extends Component {
  render() {
    const {
      todos,
      onToggleTodo
    } = this.props;
    const listClasses = getClasses({
      'to-do-list': true,
      'no-items': !todos.length
    });

    return (
      <ul className={listClasses}>
        {todos.map((item) => <ToDoItem item={item} key={item.id} onToggleTodo={onToggleTodo} />)}
      </ul>
    );
  }
}
