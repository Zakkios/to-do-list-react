import React from 'react'
import { SetTodos } from '../App'

const ClearTodo = ({setTodos}:{setTodos:SetTodos}) => {
    const clearTodo = () => {
        setTodos(() => [])
        localStorage.clear
        console.log(localStorage)
    }

  return (
    <button onClick={clearTodo}>Reset</button>
  )
}

export default ClearTodo