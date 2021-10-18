import React from 'react'

export default function Title() {

    const colorChange = () => {
        console.log('changed')
    }

    return (
        <div className="bigBoy" onClick={colorChange}>
            <h2>REACT PRACTICE</h2>
        </div>
    )
}
