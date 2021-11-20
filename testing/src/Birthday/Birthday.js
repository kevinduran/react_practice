import React from 'react'
import birthdayData from './birthdayData'


export default function Birthday() {
    return (
        <div className="bigBoy">
            {birthdayData.map(key => {console.log(key)})}
        </div>
    )
}
