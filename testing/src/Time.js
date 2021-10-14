import React,{useState} from 'react'

export default function Time() {
    const[time, setTime] = useState('')
    setInterval(()=>{
        setTime(new Date().toLocaleTimeString());
    },1000)
 
    return (
        <div className = "bigBoy">
            {time}
        </div>
    )

}
