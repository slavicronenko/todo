import React, { Component } from 'react';
import { connect } from 'react-redux'
import './add-item.css';
import {
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap';
import { addTodo } from '../app.actions';

class ToDoAddItem extends Component {
  constructor({dispatch}) {
    super();

    this.state = {text: ''};
    Object.assign(this, {
      dispatch,
      onClick: this.onClick.bind(this),
      handleChange: this.handleChange.bind(this)
    })
  }

  handleChange(event) {
    this.setState({text: event.target.value})
  }

  onClick() {
    this.dispatch(addTodo(this.state.text));
    this.setState({text: ''});
    this.input.focus();
  }

  render() {
    return (
      <div className="to-do-add-item">
        <InputGroup>
          <FormControl type="text" className="to-do-add-item__text" value={this.state.text}
                       inputRef={input => this.input = input}
                       onChange={this.handleChange}/>
          <InputGroup.Button>
            <Button className="to-do-add-item__add" onClick={this.onClick}
                    disabled={!this.state.text}>+</Button>
          </InputGroup.Button>
        </InputGroup>
      </div>
    );
  }
}

export default connect()(ToDoAddItem);
