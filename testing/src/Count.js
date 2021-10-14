import React,{useState} from 'react'

export default function Count() {

    const[number, setNumber] = useState(0)

    const add = ()=>{
     setNumber(number + 1)
    } 
    const sub = ()=>{
     setNumber(number - 1)
    } 
 


    return (
        <div className = "bigBoy">
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
    )
}
