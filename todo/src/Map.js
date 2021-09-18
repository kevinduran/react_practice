import React from 'react'

export default function Map() {
    const months = ['jan','feb','march','april','may','june','july','august']
    return (
        <div>
            {months.map(month=><li>{month}</li>)}
        </div>
    )
}
