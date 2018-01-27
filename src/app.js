import React, { Component } from 'react';
import './app.css';
import ToDoHeader from './header';
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
        <ToDoHeader />
        <Grid>
          <Row>
            <Col xs={12}>
              <ToDoAddItem />
              <ToDoContainer />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
