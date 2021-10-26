import React from 'react'
import logo from './hell.gif'

export default function Darks() {
    return (
        <div className="bigBoy">
        <div className = "hell">
            <img src={logo} alt="fail"/>  
        </div>
        <div className="sliderToggleContainer"> 
           <h4>turn on</h4>
           <label className="switch">
            <input type="checkbox"/>
            <span className='slider round'></span>
           </label>
           <h4 className="red">hell</h4>
        </div>

        </div>
    )
}
