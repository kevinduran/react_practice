import React, { useState } from 'react'

export default function Bored() {
    const [output, setOutput] = useState('')

    const fun= () => {
        fetch('https://www.boredapi.com/api/activity')
        .then(res=>res.json())
        .then(data=> {
            setOutput(data.activity)
        })
        
    }

    return (
        <div class="bigBoy">
            <button className="btn btn-top" onClick={fun}>i'm bored</button>
            <div className="boredOutput">{output}. </div>
        </div>
    )
}
