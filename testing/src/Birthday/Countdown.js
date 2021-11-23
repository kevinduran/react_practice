import React from 'react'
import moment from 'moment';



var today = moment(new Date().toLocaleDateString());


export default function Countdown(birthday) {
    return (
        <div>
             <p className="redTiny">birthday is today</p>
        </div>
    )
}
