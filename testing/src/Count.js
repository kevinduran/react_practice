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
                <div className="btnContainer">
                    <button 
                    className="count btn"
                    onClick={add}
                    >+</button>
                    <button 
                    className="count btn"
                    onClick={sub}
                    >-</button>
                </div>
        </div>
    )
}
