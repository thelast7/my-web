import React from "react";

const TodoList = ({ todos }) => {
  const listtodo = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span>{todo.content}</span>
        </div>
      );
    })
  ) : (
    <p className="center">aman</p>
  );

  return <div className="todo collection">{listtodo}</div>;
};

export default TodoList;
