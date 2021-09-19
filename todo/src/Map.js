import React from 'react';

export default function Map() {
    const name = ['kevin','joe','kim','james']

    return (
        
        name.map(person => <li>{person}</li>)
    
    )
}
