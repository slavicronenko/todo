import React, {Component} from 'react';
import './App.scss';
import ToDoList from './ToDoList';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row className="show-grid">
            <Col xs={12}>
              <ToDoList></ToDoList>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
