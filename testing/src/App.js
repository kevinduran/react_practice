import React from 'react'
import './App.css'
import Title from './Title'
import Time from './Time.js'
import Count from './Count.js'
import Todo from './Todo.js'
import Weather from './Weather.js'
import CreateLife from './CreateLife'
import Hamburger from './Hamburger'
import Hell from './Hell'
import Bored from './Bored/Bored'
import Birthday from  './Birthday/Birthday'
import Practice from './Practice'
export default function App() {
 

    return (
        <div className="theOne">
            <Title/>
            <Time/>
            <Count/>
            <Todo/>
            <Weather/>
            <CreateLife/>
            <Hamburger/>
            <Hell/>
            <Bored/>
            <Birthday/>
            <Practice/>
        </div>
    )

   
}



