import React from 'react'
import birthdayData from './birthdayData'


export default function Birthday() {
    return (
        <div className="bigBoy">
            {birthdayData.map(key => {
               return <p>{key.name} - {key.age}</p>     
            })}
        </div>
    )
}


// * app should tell you how many days until their birthday and how old they are