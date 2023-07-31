import React from "react";
import { ITodo, SetTodos, Todos } from "../App";
import DeleteTodo from "./DeleteTodo";

export const Todo = ({name, id, todos, setTodos}:ITodo & {todos:Todos, setTodos:SetTodos}) => {
  return <div>
    <span>{name}</span>
  <DeleteTodo id={id} todos={todos} setTodos={setTodos}/> 
  </div>;
};
