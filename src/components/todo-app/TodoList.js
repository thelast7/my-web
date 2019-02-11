import React from "react";

const TodoList = ({ todos }) => {
  const ListTodo = todos.length ? (
    todos.map(todo => {
      return (
        <div className="item-collection">
          <span>{todo.content}</span>
        </div>
      );
    })
  ) : (
    <p className="center">aman</p>
  );

  return <div className="todo collection">{ListTodo}</div>;
};

export default TodoList;
