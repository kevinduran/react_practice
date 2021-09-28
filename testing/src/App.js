import React from 'react'
import './App.css'

export default function App() {

   
    
    const fetchMyData = ()=>{
        const myOutput = document.querySelector('.output');
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(res=>res.json())
            .then(response=>{
                console.log(response);
                myOutput.innerHTML = JSON.stringify(response); 
            }); 
    }   

    return (
        <div>
            <div className="output">hello there</div>
            <button onClick={fetchMyData}>get data</button>
        </div>
    )
}