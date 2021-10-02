import React,{useState} from 'react'
import './App.css';

function App() {

  const [time,setTime] = useState('')

  setInterval(()=>{
    setTime(new Date().toLocaleTimeString())
  },1000)

  return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&display=swap');
      </style>
      <div className="time">
        {time}
      </div>
    </div>
  );
}

export default App;


