import './App.css';
import Map from './Map.js'
import React from 'react';



const App = () => {

const DoSomething = (props) => {
    return props.namee
}

  return(
    <div>
      <DoSomething namee = "HEY" />
      hello
      <Map />  
    </div>
    
  )
}





export default App