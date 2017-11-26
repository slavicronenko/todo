import React, { Component } from 'react';
import './ToDoAddItem.css';
import {
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap';

export default class ToDoAddItem extends Component {
  render() {
    return (
      <div className="ToDoAddItem">
        <InputGroup>
          <FormControl type="text" className="ToDoAddItem__text" />
          <InputGroup.Button>
            <Button className="ToDoAddItem__add">+</Button>
          </InputGroup.Button>
        </InputGroup>
      </div>
    );
  }
}
