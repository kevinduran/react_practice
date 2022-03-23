import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <ul>
            <Link to='./One'>
                <li>1</li>
            </Link>
            <Link to='./Two'>
                <li>2</li>
            </Link>
            <Link to='./Three'>
                <li>3</li>
            </Link>
        </ul>
    </nav>
  )
}

export default Nav