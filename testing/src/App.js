import React from 'react'
import './App.css'

export default function App() {

   
    
    const fetchMyData = ()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(res=>res.json())
            .then(response=>{
                console.log(response);
            });    
    }   

    return (
        <div>
            <div className="output">hello there</div>
            <button onClick={fetchMyData}>get data</button>
        </div>
    )
}