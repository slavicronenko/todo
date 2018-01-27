import React, { Component } from 'react';
import { connect } from 'react-redux'
import './header.css';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

class ToDoHeader extends Component {
  render() {
    const { itemsLeft } = this.props;
    const itemsLeftText = `${itemsLeft} item${itemsLeft !== 1 ? 's' : ''} left`;

    return (
      <div className="to-do-header">
        <Grid>
          <Row>
            <Col xs={12}>
              <div className="to-do-header__content">
                <div className="to-do-header__items-left">{itemsLeftText}</div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemsLeft: state.todos.filter((item) => !item.completed).length
  }
};

export default connect(
  mapStateToProps
)(ToDoHeader);
