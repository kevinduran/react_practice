import React from 'react'
import birthdayData from './birthdayData'


export default function Birthday() {
    return (
        <div className="bigBoy">
            <h3>Happy Birthday:</h3>
            {birthdayData.map(key => {
               return <p>{key.name} - {key.age}</p>     
            })}
            <p className="birthdayTotal">there are {birthdayData.length} birthdays today</p>
        </div>
    )
}
