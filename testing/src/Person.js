import React, {useState} from 'react'

export default function Person() {
    const [person,setPerson] = useState('')

    return (
        <div className="bigBoy">
            <button className="friendBtn btn">friend</button>
            hello, {person}.
        </div>
    )
}
