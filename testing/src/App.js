import React,{useState,useEffect} from 'react'
import './App.css'
export default function App() {
    const [person, getPerson] = useState('')
    const url = 'https://randomuser.me/api/'
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{getPerson(data.results[0].name.first); console.log(data)})
        
    },[])
    
    return (
        <div>
            hello, {person}
        </div>
    )
}
