import React, { useState } from 'react'
import Loading from './Loading'
export default function Bored() {
    const [output, setOutput] = useState('')
    const [loading, setLoading] = useState(true)


    const fun= () => {
        setLoading(false)
        fetch('https://www.boredapi.com/api/activity')
        .then(res=>res.json())
        .then(data=> {
            setOutput(data.activity)
            setLoading(true)
        })
    }

    
if(loading){
    return (
        <div className="bigBoy">
            <button className="btn btn-top" onClick={fun}>i'm bored</button>
            <div className="boredOutput">
                <h5>{output}</h5>        
            </div>
        </div>
    )
}else{
    return (
        <div className="bigBoy">
            <button className="btn btn-top" onClick={fun}>i'm bored</button>
            <div className="boredOutput">
                <Loading />          
            </div>
        </div>
    )
}
    
}
