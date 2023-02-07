import React, { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import { Container,Title,Todo } from "./App.styled";
import { IItem } from "./types/todo";

const App: React.FC = () => {
  const [todos, setTodos] = useState<IItem[]>([]
);
  
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  });
  const todoAddHandler = (todo: IItem) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.random().toString(),
          title: todo.title,
        },
      ];
    });
  };

  const todoRemoveHamdler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return todo.id !== id;
      });
    });
  };
  return (
    <Container>
      <Title>Your <Todo>todo</Todo> List</Title>
      <AddTodo onAddTodo={todoAddHandler} />
      <TodoList todos={todos} onDeleteTodo={todoRemoveHamdler} />
    </Container>
  );
};
// some
export default App;