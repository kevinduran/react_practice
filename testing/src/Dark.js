import React from 'react'
import logo from './hell.gif'

export default function Darks() {

    const addHell = () =>{
     document.querySelector('.hellYes').classList.remove('hellNo')
    }

    return (
        <div className="bigBoy">
            <div className="sliderToggleContainer"> 
            <h4 className="red">hell</h4>
            <label onClick={addHell} className="switch">
                <input type="checkbox"/>
                <span className='slider round'></span>
            </label>
            </div>
            <div className = "hell">
                <img className="hellYes hellNo" src={logo} alt="fail"/>  
            </div>

        </div>
    )
}
