import React,{useState} from 'react'
import './App.css'

function App() {
  const[person,setPerson]=useState([])

  const createPerson = ()=> {
    fetch('https://randomuser.me/api/')
    .then(res=>res.json())
    .then(data=>setPerson([...person,data]))
    console.log(person)
  }


  return (
    <div>
      <button onClick={createPerson}>test</button>
      <div>{person.map((x)=>{
        return <p>{x.results[0].name.first}</p>
      })}</div>
    </div>
  )
}

export default App