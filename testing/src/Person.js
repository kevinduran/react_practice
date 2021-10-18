import React, {useState} from 'react'

export default function Person() {
    const [person, setPerson] = useState('')
    const[name, setName] = useState('')
    const makeFriend = () => {
        fetch('https://randomuser.me/api/')
        .then(res=> res.json())
        .then(data=>{
            setPerson(data.results[0].picture.thumbnail)
            setName(`new human:${data.results[0].name.first} created.`)
        })
        
    }

    return (
        <div className="bigBoy">
            <div className="personContainer">
                <button 
                    className="friendBtn btn"
                    onClick={makeFriend}
                >
                    create life
                </button>
                <div className="space">{name}</div>
                <div className="space"><img alt="" src={person}/></div>  
            </div>          
        </div>
    )
}
