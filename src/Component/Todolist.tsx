import { SetTodos, Todos } from '../App'
import { Todo } from './Todo'


interface TodolistProps {
    todos:Todos,
    setTodos: SetTodos
}

export const Todolist = ({todos, setTodos}:TodolistProps) => {

  return (
    <ul>
    {todos.map(todo => {
        const {id, name, progress} = todo;
       return <li key={id}><Todo todos={todos} setTodos={setTodos} id={id} name={name} progress={progress} /></li>
     })}
    </ul>
  )
}
