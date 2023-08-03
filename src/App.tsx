import React, { useEffect, useState } from 'react';
import './App.css';
import { Todolist } from './Component/Todolist';
import {CreateTodo} from './Component/CreateTodo';
import ClearTodo from './Component/ClearTodo';
import ErrorMessage from './Component/ErrorMessage';

export interface ITodo {
  id:string,
  name:string,
  progress:string
}

export type Todos = Array<ITodo>
export type SetTodos = React.Dispatch<React.SetStateAction<Todos>>
export type SetErrorMessage = React.Dispatch<React.SetStateAction<string>>


function App() {
  const [todos, setTodos] = useState<Todos>(JSON.parse(window.localStorage.getItem("todos")!) ?? []);
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  return (
    <div className="App">
    <ErrorMessage message={errorMessage} />
    <CreateTodo setTodos={setTodos} setErrorMessage={setErrorMessage} /><ClearTodo setTodos={setTodos} setErrorMessage={setErrorMessage}/>
    <Todolist todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
