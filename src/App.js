import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList';
import ToDoAddItem from './ToDoAddItem';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoItems: [
        {id: 0, text: 'do the dishes'},
        {id: 1, text: 'learn English', disabled: true},
        {id: 2, text: 'make todo app', checked: true},
        {id: 3, text: 'something else', disabled: true, checked: true},
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Grid>
          <Row className="show-grid">
            <Col xs={12}>
              <ToDoAddItem></ToDoAddItem>
              <ToDoList list={this.state.toDoItems}></ToDoList>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
