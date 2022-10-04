import React, {useState} from 'react'
import CreateTodoField from './Create-todo-field'
import TodoItem from './item/TodoItem'

const data = [
  {
    id: "222",
    title: "working...",
    isCompleted: false,

  },
  {
    id: "223",
    title: "blablabla...",
    isCompleted: true,
    
  },
  {
    id: "224",
    title: "Notworking...",
    isCompleted: false,
    
  }
]

const Home = () => {

const [todos,setTodos] = useState(data)

const changeTodo = (id) => {
  const copy = [...todos]
  const current = copy.find(t => t.id === id)
  current.isCompleted = !current.isCompleted
  setTodos(copy)
}

const removeTodo = (id) => {
  setTodos([...todos].filter(t => t.id !== id))
}



  return (
    <div className='text-white w-4/5 mx-auto'>
    <h1 className='text-2xl font-bold text-center mb-10'>React todos</h1>
      {todos.map(todo => <TodoItem removeTodo={removeTodo} changeTodo={changeTodo} key={todo.id} todo={todo}/> )}
      <CreateTodoField setTodos={setTodos}/>
    </div>
  )
}

export default Home