import React,{useState} from 'react'
import './App.css';

function App() {
  const [todo,setTodo] = useState('');
  
  const addTodo = () =>{
    setTodo([...todo,
      <div className="todoDiv">
        <div>{document.getElementById('input').value}</div>
        <button>x</button>
      </div>
      
    ]);
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

