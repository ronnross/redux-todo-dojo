import React, { Component, PropTypes } from 'react';
import { removeTodo } from '../actions';

export default class Todo extends Component {
  render() {
    return (
      <span>
        <div
          onClick={this.props.onClick}
          style={{
            textDecoration: this.props.completed ? 'line-through' : 'none',
            cursor: this.props.completed ? 'default' : 'pointer'
          }}>
          {this.props.text}
        </div>
        <button onClick={() => this.props.dispatch(removeTodo(this.props.key))}>Remove</button>
      </span>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};
