import React, { Component } from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { todos, filter, searchTerm } = this.props;

    const filteredTodos = todos.filter((todo) => {
      const matchesFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";

      const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

      return matchesFilter && matchesSearch;
    });

    console.log("Filtered Todos:", filteredTodos);

    return (
      <ul>
        <li className="my-2 text-sm italic">All Your Notes Here...</li>
        {filteredTodos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  filter: state.filter,
  searchTerm: state.searchTerm.toLowerCase(),
});

export default connect(mapStateToProps)(TodoList);
