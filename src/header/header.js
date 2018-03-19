import React, { Component } from 'react';
import { connect } from 'react-redux'
import './header.css';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import {
  showAllTodos,
  updateFilter,
  clearCompleted
} from '../app.actions';
import {
  TODO_STATUS
} from '../app.reducer';
import ToDoSearch from '../search';
import { getClasses } from '../helper';

class ToDoHeader extends Component {
  filters = {
    all: {
      title: 'All',
      action: () => {
        this.props.dispatch(showAllTodos())
      }
    },
    [TODO_STATUS.ACTIVE]: {
      title: TODO_STATUS.ACTIVE,
      action: () => {
        this.props.dispatch(updateFilter(TODO_STATUS.ACTIVE))
      }
    },
    [TODO_STATUS.COMPLETED]: {
      title: TODO_STATUS.COMPLETED,
      action: () => {
        this.props.dispatch(updateFilter(TODO_STATUS.COMPLETED))
      }
    }
  };

  clearCompleted() {
    this.props.dispatch(clearCompleted())
  }

  render() {
    const {itemsLeft, filter} = this.props;
    const itemsLeftText = `${itemsLeft} item${itemsLeft !== 1 ? 's' : ''} left`;

    return (
      <div className="to-do-header">
        <Grid>
          <Row>
            <Col xs={12}>
              <div className="to-do-header__content">
                <div className="to-do-header__left">
                  <div className="to-do-header__items-left" title={itemsLeftText}>{itemsLeft}</div>
                  <div className="to-do-header__clear-completed"
                       title="Clear all completed items"
                       onClick={this.clearCompleted.bind(this)}></div>
                </div>
                <div className="to-do-header__filters">
                  {this.createFilterItems(filter)}
                </div>
                <div className="to-do-header__right">
                  <ToDoSearch></ToDoSearch>
                  <div className="to-do-header__help">?</div>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  createFilterItems(currentFilter) {
    return Object.keys(this.filters).map((filterName) => {
      const filterItem = this.filters[filterName];
      const filterClasses = getClasses({
        'to-do-header__filter': true,
        'active': currentFilter === filterName || (filterName === 'all' && currentFilter === '')
      });

      return <div className={filterClasses}
                  key={filterName}
                  title={`Show ${filterName} items`}
                  onClick={filterItem.action}>
        {filterItem.title}
      </div>;
    });
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
    itemsLeft: state.todos.filter((item) => item.status !== TODO_STATUS.COMPLETED).length
  }
};

export default connect(
  mapStateToProps
)(ToDoHeader);
