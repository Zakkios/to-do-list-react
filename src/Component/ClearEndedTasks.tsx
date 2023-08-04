import React from 'react'
import { SetTodos, Todos } from '../App'

const ClearEndedTasks = ({todos, setTodos}:{todos:Todos, setTodos:SetTodos}) => {

    const handleEndedTasks = () => {
        const newTodos = todos.filter(todo => todo.progress != "Terminée")
        setTodos(newTodos)
    }

  return (
    <button onClick={handleEndedTasks}>Nettoyer les taches terminées</button>
  )
}

export default ClearEndedTasks