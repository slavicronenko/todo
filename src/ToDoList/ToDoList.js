import React, { Component } from 'react';
import './ToDoList.css';
import ToDoListItem from '../ToDoListItem';

export default class ToDoList extends Component {
  render() {
    const list = [
      {id: 0, text: 'Test 1'},
      {id: 1, text: 'Test 2'},
      {id: 2, text: 'Test 3'},
      {id: 3, text: 'Test 4'},
    ];

    return (
      <ul className="ToDoList">
        {list.map((item) => <ToDoListItem item={item} key={item.id}></ToDoListItem>)}
      </ul>
    );
  }
}
