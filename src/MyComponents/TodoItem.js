import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
      <h4>{todo.text}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-primary" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}
