import React from 'react'
import logo from './assets/cyborg.jpeg'


const Nav = () => {
    return (
       <nav>
           <div className="logoContainer"><img className="logoImage" src={logo} alt="logo cyborg"></img></div>
           <div className="linkContainer">
            <ul>
                <li>kill all humans</li>
                <li>make cure for cancer</li>
                <li>start WW3</li>
            </ul>
           </div> 
           <div className="hamburger"></div>
           <div className="overlayMenu"></div>
       </nav>
    )
}

export default Nav