import React, {useState} from 'react'

const CreateTodoField = ({setTodos}) => {
    const [title, setTitle] = useState('')

    const addTodo = (title) => {
        setTodos(prev =>[{
          id: new Date(),
          title,
          isCompleted: false
        },
          ...prev])
          setTitle("")
        }

  return (
    <div className='flex items-center justify-between mb-4 rounded-2xl border-gray-800 border-2 px-5 py-3 w-full mt-20'>
        <input placeholder='Add todo' className='bg-transparent w-full border-none outline-none' onChange={e => setTitle(e.target.value)} value={title} type="text" onKeyPress={e => e.key === "Enter" && addTodo(title)}/ > 
    </div>
  )
}

export default CreateTodoField