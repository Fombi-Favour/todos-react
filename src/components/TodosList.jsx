/* eslint-disable react/prop-types */
import React from 'react';
import TodoItem from './TodoItem';

const TodosList = ({
  todosProps, setTodos, handleChange, delTodo,
}) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        setTodos={setTodos}
        handleChange={handleChange}
        delTodo={delTodo}
      />
    ))}
  </ul>
);

export default TodosList;
