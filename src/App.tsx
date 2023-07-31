import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { FirstComponent } from './Component/FirstComponent';
import {v4} from "uuid"
import { Todolist } from './Component/Todolist';
import {CreateTodo} from './Component/CreateTodo';
import ClearTodo from './Component/ClearTodo';

export interface ITodo {
  id:string,
  name:string,
}

export type Todos = Array<ITodo>
export type SetTodos = React.Dispatch<React.SetStateAction<Todos>>


function App() {
  const [todos, setTodos] = useState<Todos>(JSON.parse(window.localStorage.getItem("todos")!) ?? []);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  return (
    <div className="App">
    <CreateTodo setTodos={setTodos} /><ClearTodo setTodos={setTodos}/>
    <Todolist todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
