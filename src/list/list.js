import React, { Component } from 'react';
import './list.css';
import ToDoItem from '../todo-item';

export default class ToDoList extends Component {
  constructor(props, { store }) {
    super(props, { store });
  }

  render() {
    const { list } = this.props;

    return (
      <ul className="to-do-list">
        {list.map((item) => <ToDoItem item={item} key={item.id}></ToDoItem>)}
      </ul>
    );
  }
}
