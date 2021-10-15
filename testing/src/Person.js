import React, {useState} from 'react'

export default function Person() {
    const [person, setPerson] = useState('')
    const[name, setName] = useState('')
    const makeFriend = () => {
        fetch('https://randomuser.me/api/')
        .then(res=> res.json())
        .then(data=>{
            setPerson(data.results[0].picture.thumbnail)
            setName(data.results[0].name.first)
        })
        
    }

    return (
        <div className="bigBoy">
            <button 
                className="friendBtn btn"
                onClick={makeFriend}
            >hello</button>
            hello, {name}
            <img alt="" src={person}/>.
        </div>
    )
}
