import React,{useState} from 'react'

export default function Weather() {
    const[temp,setTemp] = useState(0)
    const key = '3744763af6d8773cbcdb4e2f92df296d'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=oxnard&units=imperial&APPID=${key}`)
        .then(res=>res.json())
        .then(data=>{
            setTemp(Math.round(data.main.temp))
        })
    
    return (
        <div className="bigBoy" >
            {temp}&deg;
        </div>
    )
}



