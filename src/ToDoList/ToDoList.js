import React, { Component } from 'react';
import './ToDoList.css';
import ToDoListItem from '../ToDoListItem';

export default class ToDoList extends Component {
  render() {
    const list = [
      {id: 0, text: 'do the dishes'},
      {id: 1, text: 'learn English', disabled: true},
      {id: 2, text: 'make todo app', checked: true},
      {id: 3, text: 'something else', disabled: true, checked: true},
    ];

    return (
      <ul className="ToDoList">
        {list.map((item) => <ToDoListItem item={item} key={item.id}></ToDoListItem>)}
      </ul>
    );
  }
}
