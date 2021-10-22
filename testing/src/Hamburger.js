import React,{useState} from 'react'

export default function Hamburger() {
    const [active,setActive]= useState([])
    
    const activate = () => {
        const burgerMenu = document.querySelector('.burgerMenu');
        if(burgerMenu.classList !== 'activeBurgerMenu'){
           setActive( burgerMenu.classList.toggle('activeBurgerMenu'));
        }
        
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
