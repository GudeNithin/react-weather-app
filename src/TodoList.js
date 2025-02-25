import React from 'react'
import './App.css'
const TodoList = ({todolist,deleteHandler}) => {
  return (
    <div>
      {todolist.map((todo,index)=><div key={index}>
        <h3>{todo} &nbsp; <button onClick={()=>deleteHandler(index)}>Delete</button></h3>
      </div>)}
    </div>
  )
}

export default TodoList
