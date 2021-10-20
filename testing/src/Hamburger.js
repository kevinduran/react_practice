import React from 'react'

export default function Hamburger() {

    const burgerMenu = document.querySelector('.burgerMenu');
    
    const activate = () => {
        burgerMenu.classList.add('activeBurgerMenu')
    }

    return (    
            <div className="bigBoy hamburgerBigContainer">
                <div className="burger" onClick={activate}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="burgerMenu">
                    <ul>
                        <li>death laser</li>
                        <li>captain punch</li>
                        <li>hyperbeam</li>
                    </ul>
                </div>
            </div>

    )
}
