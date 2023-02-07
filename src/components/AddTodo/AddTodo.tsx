import React, { useState } from "react";
import { IItem } from "../../types/todo";
import { Form, Input, Button } from "./AddTodo.styled";

interface IProps {
  onAddTodo: (todo: IItem) => void;
}
type OnLyTitle = Pick<IItem, "title">;

const AddTodo: React.FC<IProps> = (props) => {
  const [todo, titleTodo] = useState<Partial<OnLyTitle>>({});

  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    titleTodo({
      title: e.target.value,
    });
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!todo.title) {
      return;
    }
    props.onAddTodo(todo as IItem);
  };
  return (
    <Form onSubmit={submitHandler}>
      <Input type="text" id="add-todo" onChange={titleHandler} placeholder="add task" />

      <Button type="submit">Add</Button>
    </Form>
  );
};
export default AddTodo;
