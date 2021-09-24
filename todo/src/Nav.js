import React from 'react'
import logo from './assets/cyborg.jpeg'


const Nav = () => {
    return (
       <nav>
           <div className="logoContainer"><img className="logoImage" src={logo} alt="logo cyborg"></img></div>
           <div className="linkContainer">
                <ul className = "mainLink">
                    <li className = "mainLinkItem">kill all humans</li>
                    <li className = "mainLinkItem">make cure for cancer</li>
                    <li className = "mainLinkItem" > start WW3</li>
                </ul>
           </div> 
           <div className="hamburgerContainer">
               <div className="line"></div>
               <div className="line"></div>
               <div className="line"></div>
           </div>
           <div className="overlayContainer"></div>
       </nav>
    )
}

export default Nav