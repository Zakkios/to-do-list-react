import { SetTodos, SetErrorMessage } from '../App'

const ClearTodo = ({setTodos, setErrorMessage}:{setTodos:SetTodos, setErrorMessage:SetErrorMessage}) => {
    const clearTodo = () => {
        setTodos(() => [])
        setErrorMessage("")
        localStorage.clear()
    }

  return (
    <button onClick={clearTodo}>Reset</button>
  )
}

export default ClearTodo