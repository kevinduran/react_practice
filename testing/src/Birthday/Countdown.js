import React from 'react'
import moment from 'moment';



export default function Countdown(birthdayData) {
    var today = moment(new Date().toLocaleDateString());
    var nextYear = new Date().getFullYear()+1;
    
    var birthday = birthdayData.birthday

    var birthdayNextDate = nextYear + birthday.slice(4)
    
    var birthdayNext = moment(birthdayNextDate);
    return (
        <div>
             <p className="redTiny">birthday is {birthdayNext.from(today)}</p>
        </div>
    )
}

