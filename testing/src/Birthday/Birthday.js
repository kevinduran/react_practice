import React from 'react'
import birthdayData from './birthdayData'
import moment from 'moment';

export default function Birthday() {
    return (
        <div className="bigBoy">
                {birthdayData.map(key => {
                        let today = new Date().toLocaleDateString();
                        let myBirthday = '11/23/2021'
                        let number = 100;


                        var a = moment([2007, 0, 28]);
                        var b = moment([2007, 0, 29]);
                        console.log(a.from(b) )// "a day ago"


                        !myBirthday.toString()  ? console.log('happy bday') : console.log(`${number} days until your bday`)
                                      
                        return (
                            <div className="birthdayPerson" >
                                <p>{key.name} - {key.age}<span className="tinyFont"> years old</span></p>
                                <p className="redTiny">100 days until their birthday</p>
                            </div>
                        )
                    })
                }
        </div>
    )
}


// * app should tell you how many days until their birthday and how old they are
