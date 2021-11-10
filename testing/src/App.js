import React from 'react'
import './App.css'
import Title from './Title'
import Time from './Time.js'
import Count from './Count.js'
import Todo from './Todo.js'
import Weather from './Weather.js'
import Person from './Person.js'
import Hamburger from './Hamburger'
import Dark from './Dark'
import Bored from './Bored'
import API from './API'
import Test from './Test'

export default function App() {
 

    return (
        <div className="theOne">
            <Title/>
            <Time/>
            <Count/>
            <Todo/>
            <Weather/>
            <Person/>
            <Hamburger/>
            <Dark/>
            <Bored/>
            <API/>
            <Test/>
        </div>
    )

   
}



