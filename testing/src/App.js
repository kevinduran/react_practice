import React, {useState} from 'react'
import './App.css'
export default function App() {
    const[time, setTime] = useState('')
    const[number, setNumber] = useState(0)

    setInterval(()=>{
        setTime(new Date().toLocaleTimeString());
    },1000)
    
   const add = ()=>{
    setNumber(number + 1)
   } 
   const sub = ()=>{
    setNumber(number - 1)
   } 


    return (
        <>
            <div>
                {time}
            </div>
            <div>
                <div>{number}</div>
                <button 
                className="count"
                onClick={add}
                >+</button>
                <button 
                className="count"
                onClick={sub}
                >-</button>
            </div>
        </>
    )

   
}





//React JS MINI PROJECTS
    //--clock
    //--count
    //--todo 
    //--weather (use API)
    //--random person generator (use API)