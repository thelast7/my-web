import React, { Component } from "react";
import TodoList from "./todo-app/TodoList";

class Todos extends Component {
  state = {
    todos: []
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center">Todo's</h1>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default Todos;
