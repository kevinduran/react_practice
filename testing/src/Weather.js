import React from 'react'

export default function Weather() {

    const key = '3744763af6d8773cbcdb4e2f92df296d'

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=ventura&APPID=${key}`)
        .then(res=>res.json())
        .then(data=>console.log(data.weather[0].description))
    return (
        <div className="bigBoy">
            hello friend
        </div>
    )
}



