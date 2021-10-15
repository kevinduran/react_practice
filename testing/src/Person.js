import React, {useState} from 'react'

export default function Person() {
    const [person, setPerson] = useState('')
    const[name, setName] = useState('')
    const makeFriend = () => {
        fetch('https://randomuser.me/api/')
        .then(res=> res.json())
        .then(data=>{
            setPerson(data.results[0].picture.thumbnail)
            setName(`hello ${data.results[0].name.first}.`)
        })
        
    }

    return (
        <div className="bigBoy">
            <div className="personContainer">
                <button 
                    className="friendBtn btn"
                    onClick={makeFriend}
                >
                    hi
                </button>
                {name}
                <img alt="" src={person}/>
            </div>
           
        </div>
    )
}
