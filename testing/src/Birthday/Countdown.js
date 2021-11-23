import React from 'react'
import moment from 'moment';



export default function Countdown(birthday) {
    var today = moment(new Date().toLocaleDateString());
    var birthdayNext = moment(birthday.birthday);
    return (
        <div>
             <p className="redTiny">birthday is {today.from(birthdayNext)}</p>
        </div>
    )
}
