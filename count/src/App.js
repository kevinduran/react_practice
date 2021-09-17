import React, {useState} from 'react';
import './App.css'

const App = () => {

  const [kanye, setKanye] = useState(0)

  const addMe =  () => {
    setKanye(kanye+1);
  }


  const subMe =  () => {
    setKanye(kanye-1);
  }



  return(
    <div className="container">
      <style>
         @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&display=swap');
      </style>
      <div className="number">{kanye}</div>
      <div className="btnContainer">
        <button onClick={subMe} className="btn">-</button>
        <button onClick={addMe} className="btn">+</button>
      </div>
    </div>
  )
}


export default App

 