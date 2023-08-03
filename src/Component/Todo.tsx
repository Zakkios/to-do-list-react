import React from "react";
import { ITodo, SetTodos, Todos } from "../App";
import DeleteTodo from "./DeleteTodo";

export const Todo = ({name, id, progress, todos, setTodos}:ITodo & {todos:Todos, setTodos:SetTodos}) => {

  // const handleProgress = () => {
  //   const newTodo = todos
  //   newTodo.forEach(todo => { 
  //     if (todo.id == id) {
  //       switch (todo.progress) {
  //         case "À faire":
  //           todo.progress = "En cours"
  //           break;
  //         case "En cours":
  //           todo.progress = "Terminée"
  //           break;
  //           case "Terminée":
  //           todo.progress = "À faire"
  //           break;
        
  //         default:
  //           break;
  //       }
  //     }
  //   });
  //   setTodos(newTodo)
  //   console.log(newTodo)
  // }

  const handleProgress = () => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        switch (todo.progress) {
          case "À faire":
            return { ...todo, progress: "En cours" };
          case "En cours":
            return { ...todo, progress: "Terminée" };
          case "Terminée":
            return { ...todo, progress: "À faire" };
          default:
            return todo;
        }
      }
      return todo;
    });
  
    setTodos(updatedTodos);
  };

  return <div>
    {name} | Statue : <button onClick={handleProgress}>{progress}</button>
  <DeleteTodo id={id} todos={todos} setTodos={setTodos}/> 
  </div>;
};
