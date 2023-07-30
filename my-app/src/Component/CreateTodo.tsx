import React, { useState } from 'react'
import { v4 } from 'uuid';
import { SetTodos, Todos } from '../App';

export const CreateTodo = ({setTodos}:{setTodos:SetTodos}) => {
    const [name, setName] = useState("");

    const createTodo = () => {
        setTodos(prevState => [...prevState, {id:v4(), name}])
        setName("")
      }
  return (
      <>
    <input type="text" value={name} onChange={(text) => setName(text.target.value) } />
    <button onClick={createTodo}>Valider</button>
      </>
  )
}