import React,{useState} from 'react'
import logo from './hell.gif'

export default function Darks() {
    
    const [hell, setHell]= useState("hellNo")

    const addHell = ()=>{
        console.log(hell)
        hell === "hellNo" ? setHell("hellYes") : setHell("hellNo");
    }
    
    return (
        <div className="bigBoy">
            <div className="sliderToggleContainer"> 
            <h4 className="red">hell</h4>
            <label onChange={addHell} className="switch">
                <input type="checkbox"/>
                <span className='slider round'></span>
            </label>
            </div>
            <div className = "hell">
                <img className={hell} src={logo} alt="fail"/>  
            </div>

        </div>
    )
}
