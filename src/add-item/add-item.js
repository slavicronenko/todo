import React, { Component } from 'react';
import './add-item.css';
import {
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap';

export default class ToDoAddItem extends Component {
  render() {
    return (
      <div className="to-do-add-item">
        <InputGroup>
          <FormControl type="text" className="to-do-add-item__text" />
          <InputGroup.Button>
            <Button className="to-do-add-item__add">+</Button>
          </InputGroup.Button>
        </InputGroup>
      </div>
    );
  }
}
