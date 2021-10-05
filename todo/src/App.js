import React,{useState} from 'react'
import './App.css';

function App() {
  const [todo,setTodo] = useState('hello, friend');
  
  const addTodo = () =>{
    setTodo(document.getElementById('input').value);
  }

  return (
    <div className="App">
      <input id="input"></input>
      <button onClick={addTodo}>test</button>
      <div>{todo}</div>
    </div>
  );
}

export default App;
