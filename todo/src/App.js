import './App.css'
import React,{useState} from 'react'

export default function App() {

  const [todo, setTodo] = useState('');

  const addTodo = ()=>{
    setTodo([...todo,
    <div>
      {document.getElementById('input').value}
      <button onClick={removeTodo}>x</button>
    </div>
    ])
    document.getElementById('input').value= ''
  }

  const removeTodo = (e) =>{
    setTodo([...todo])
  }

  return (
    <div>
      <input id="input"></input>
      <button onClick={addTodo}>test</button>
      <div className="todoDiv">{todo}</div>
    </div>
  )
}
