import { useState } from 'react'
import { v4 } from 'uuid';
import { SetTodos, SetErrorMessage } from '../App';

export const CreateTodo = ({setTodos, setErrorMessage}:{setTodos:SetTodos, setErrorMessage:SetErrorMessage}) => {
    const [name, setName] = useState("");

    const createTodo = () => {
      if(name === "") {
        setErrorMessage("Entrez une tache.")
        return
      }
      setTodos(prevState => [...prevState, {id:v4(), name}])
      setName("")
      setErrorMessage("")
      }
  return (
      <>
    <input type="text" value={name} onChange={(text) => setName(text.target.value) } />
    <button onClick={createTodo}>Valider</button>
      </>
  )
}