import React, { Component } from 'react';
import './app.css';
import ToDoContainer from './container';
import ToDoAddItem from './add-item';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

export default class ToDoApp extends Component {
  render() {
    return (
      <div className="to-do-app">
        <Grid>
          <Row className="show-grid">
            <Col xs={12}>
              <ToDoAddItem></ToDoAddItem>
              <ToDoContainer></ToDoContainer>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
