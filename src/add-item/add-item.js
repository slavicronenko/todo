import React, { Component } from 'react';
import { connect } from 'react-redux'
import './add-item.css';
import {
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap';
import {
  addTodo,
  updateNewItemText
} from '../app.actions';

class ToDoAddItem extends Component {
  onChange(event) {
    this.props.dispatch(updateNewItemText(event.target.value))
  }

  onKeyPress(event) {
    if(event.key === 'Enter' && event.target.value){
      this.addItem();
    }
  }

  addItem() {
    const { dispatch, newItemText } = this.props;

    dispatch(addTodo(newItemText));
    dispatch(updateNewItemText(''));
    this.input.focus();
  }

  render() {
    const { newItemText } = this.props;

    return (
      <div className="to-do-add-item">
        <InputGroup>
          <FormControl type="text" className="to-do-add-item__text"
                       maxLength={255}
                       value={newItemText}
                       inputRef={input => this.input = input}
                       onChange={this.onChange.bind(this)}
                       onKeyPress={this.onKeyPress.bind(this)}/>
          <InputGroup.Button>
            <Button className="to-do-add-item__add"
                    disabled={!newItemText}
                    onClick={this.addItem.bind(this)}>+</Button>
          </InputGroup.Button>
        </InputGroup>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newItemText: state.newItemText
  }
};

export default connect(
  mapStateToProps
)(ToDoAddItem);
