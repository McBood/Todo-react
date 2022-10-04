import React from 'react'
import {BsCheck} from "react-icons/bs"
import cn from "classnames"

const Check = ({isCompleted}) => {
  return (
    <div className={cn('border-2 rounded-lg border-pink-400 ${isCompleted ? "bg-pink-400" : ""} w-6 h-6 mr-2 flex items-center justify-center', {
      'bg-pink-400': isCompleted
    })}>
      {isCompleted && <div><BsCheck size={24} className='text-gray-900'/></div> }
    </div>
  )
}

export default Check