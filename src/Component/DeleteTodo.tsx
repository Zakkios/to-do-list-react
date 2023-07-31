import React from 'react'
import { SetTodos, Todos } from '../App';

const DeleteTodo = ({id, todos, setTodos}:{id:string, todos:Todos, setTodos: SetTodos}) => {

    const deleteTodo = () => {
        const newTodo = todos.filter(todo => id !== todo.id)
        setTodos(newTodo);
    }

  return (
    <button onClick={deleteTodo}>X</button>
  )
}

export default DeleteTodo