import React, { Component } from 'react';
import './ToDoList.css';
import ToDoListItem from '../ToDoListItem';

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.list
    };
  }

  render() {
    return (
      <ul className="ToDoList">
        {this.state.list.map((item) => <ToDoListItem item={item} key={item.id}></ToDoListItem>)}
      </ul>
    );
  }
}
