import React from 'react'
import Check from './Check'
import cn from "classnames"
import {BsTrash} from "react-icons/bs"

const TodoItem = ({todo, changeTodo,removeTodo}) => {
  return (
    <div  className='flex items-center justify-between mb-4 rounded-2xl bg-gray-800 p-5 w-full'>
    <button onClick={() => changeTodo(todo.id)} className='flex items-center'>
    <Check isCompleted={todo.isCompleted}/>
    <span className={cn({'line-through': todo.isCompleted})}>{todo.title}</span>
    </button>
    <button onClick={() => removeTodo(todo.id)}>
    <BsTrash size={24} className="text-gray-500 hover:text-red-700 transition-colors ease-in-out duration 300"/>
    </button>
    </div>
  )
}

export default TodoItem