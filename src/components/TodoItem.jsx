import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
} from '../redux/actions';
import { FaToggleOn, FaToggleOff, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';

class TodoItem extends Component {
  render() {
    const { todo, index, dispatch } = this.props;

    return (
      <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b py-2 gap-4">
        <div className="flex items-center">
          <span className="mr-4 text-gray-600">
            {index + 1}.
          </span>
          <span className={`mr-4 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            {todo.text}
          </span>
        </div>
        <div className='space-x-3 ml-4'>
          <button
            className={`mr-2 text-sm bg-${todo.completed ? 'gray' : 'blue'}-500 text-white px-2 py-1 rounded`}
            onClick={() => dispatch(toggleTodo(index))}
          >
            {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
          </button>
          <button
            className="mr-2 text-sm bg-red-500 text-white px-2 py-1 rounded"
            onClick={() => dispatch(removeTodo(index))}
          >
            <FaTrash />
          </button>
          {!todo.completed && (
            <button
              className="text-sm bg-green-500 text-white px-2 py-1 rounded"
              onClick={() => dispatch(markCompleted(index))}
            >
              <FaCheck />
            </button>
          )}
          {todo.completed && (
            <button
              className="text-sm bg-yellow-500 text-white px-2 py-1 rounded"
              onClick={() => dispatch(markIncomplete(index))}
            >
              <FaTimes />
            </button>
          )}
        </div>
      </li>
    );
  }
}

export default connect()(TodoItem);
