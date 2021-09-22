import React from 'react'
import logo from './assets/cyborg.jpeg'


const Nav = () => {
    return (
       <nav>
           <div><img className="logoImage" src={logo} alt="logo cyborg"></img></div>
           <ul>
               <li>kill all humans</li>
               <li>make cure for cancer</li>
               <li>start WW3</li>
           </ul>
       </nav>
    )
}

export default Nav