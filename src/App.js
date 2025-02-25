import React,{useState} from 'react'
import TodoList from './TodoList';
import './App.css'

const App = () => {
  const [task,setTask]=useState("");
  const [todos,setTodos]=useState([]);

  const handler=e=>{
    setTask(e.target.value);
  }

  const onSubmitHandler=e=>{
    e.preventDefault();
    const newTodo=[...todos,task];
    setTodos(newTodo);
    setTask("");
  }
  
  const deleteHandler=(indexVal)=>{
    const newTodo=todos.filter((todo,index)=>index!==indexVal);
    setTodos(newTodo);
  }

  return (
    <center>
      <div>
      <div className="card">
        <div className="card-body">
          <h2>Todo Management</h2>
          <form onSubmit={onSubmitHandler}>
            <input type="text" value={task} onChange={handler}/> &nbsp;
            <input className="button" type="submit" name="Add" value="Add"/>
          </form>
          <TodoList todolist={todos} deleteHandler={deleteHandler}/>
        </div>
      </div>
    </div>
    </center>
  )
}

export default App
