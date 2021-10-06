import React,{useState} from 'react'
import './App.css';

function App() {
  const [todo,setTodo] = useState('');
  const myTodo = [];
  
  const addTodo = () =>{
    setTodo([...todo, document.getElementById('input').value]);
    document.getElementById('input').value = ''
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

// you need to make an array to hold todo, map , and display them 