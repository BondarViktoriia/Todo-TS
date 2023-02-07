import React from 'react';
import { IItem } from '../../types/todo';
import { List,TodoItem,ContainerList,Icon } from './TodoList.styled';
import {BsFillTrashFill } from "react-icons/bs";

interface IProps{
    todos: IItem[];
    onDeleteTodo: (id:string) => void;
}


const TodoList: React.FC<IProps> = (props) => {
    return (
        <ContainerList><List>
            {props.todos.map((todo) => {
                return <TodoItem key={todo.id}>
                    <div>{todo.title}</div>
                    {/* <button onClick={props.onDeleteTodo.bind(this,todo.id)}><BsFillTrashFill/></button> */}
                 <Icon>   <BsFillTrashFill onClick={props.onDeleteTodo.bind(this,todo.id)}/></Icon>
                </TodoItem>
            })}
     </List></ContainerList>
    )
}

export default TodoList;