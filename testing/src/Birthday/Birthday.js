import React from 'react'
import birthdayData from './birthdayData'


export default function Birthday() {
    return (
        <div className="bigBoy">
            {birthdayData.map(key => {
               return <div>
                   {key.name}
                   
                   </div> 
            })}
        </div>
    )
}
