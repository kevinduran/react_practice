import React from 'react'
import birthdayData from './birthdayData'
import Countdown from './Countdown'

export default function Birthday() {
    return (
        <div className="bigBoy">
                {birthdayData.map(key => {               
                        return (
                            <div className="birthdayPerson" >
                                <p>{key.name} - {key.age}<span className="tinyFont"> years old</span></p>
                                <Countdown birthday={key.birthday}/>
                            </div>
                        )
                    })
                }
        </div>
    )
}




//to organize the data you must