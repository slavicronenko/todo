import React, { Component } from 'react';
import { connect } from 'react-redux'
import './search.css';
import { FormControl } from 'react-bootstrap';

class ToDoSearch extends Component {
  onChange(event) {
    this.props.dispatch(updateSearchQuery(event.target.value));
  }

  render() {
    const { searchQuery } = this.props;

    return (
      <FormControl type="text" className="to-do-add-item__text"
                   maxLength={255}
                   value={searchQuery}
                   inputRef={input => this.input = input}
                   onChange={this.onChange.bind(this)}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchQuery: state.searchQuery
  }
};

export default connect(
  mapStateToProps
)(ToDoSearch);
