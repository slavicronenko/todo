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
  render() {
    return (
      <div className="App">
        <Grid>
          <Row className="show-grid">
            <Col xs={12}>
              <ToDoAddItem></ToDoAddItem>
              <ToDoList></ToDoList>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
