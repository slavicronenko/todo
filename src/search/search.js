import React, { Component } from 'react';
import { connect } from 'react-redux'
import './search.css';
import { FormControl } from 'react-bootstrap';
import { updateSearchQuery } from '../app.actions';
import { getClasses } from '../helper';

class ToDoSearch extends Component {
  onChange(event) {
    this.props.dispatch(updateSearchQuery(event.target.value));
  }

  onClearClick(event) {
    this.props.dispatch(updateSearchQuery(''));
  }

  render() {
    const { searchQuery } = this.props;

    const listClasses = getClasses({
      'to-do-search-input': true,
      'visible': searchQuery.length
    });

    return (
      <div className="to-do-search">
        <FormControl type="text" className={listClasses}
                     maxLength={255}
                     value={searchQuery}
                     inputRef={input => this.input = input}
                     onChange={this.onChange.bind(this)}/>
        <div className="to-do-search-icon"></div>
        <div className="to-do-search-clear" onClick={this.onClearClick.bind(this)}></div>
      </div>
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
