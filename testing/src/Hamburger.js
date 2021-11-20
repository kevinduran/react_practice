import React from 'react'

export default function Hamburger() {
    
    
    const activate = () => {
        document.querySelector('.line1').classList.toggle('line1-active')
        document.querySelector('.line2').classList.toggle('line2-active')
        document.querySelector('.line3').classList.toggle('line3-active')

        const burgerMenu = document.querySelector('.burgerMenu');
        if(burgerMenu.classList !== 'activeBurgerMenu'){
           burgerMenu.classList.toggle('activeBurgerMenu')
        }
        
    }    

    return (    
            <div className="bigBoy hamburgerBigContainer">
                <div className="burger" onClick={activate}>
                    <div className="line line1"></div>
                    <div className="line line2"></div>
                    <div className="line line3"></div>
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
