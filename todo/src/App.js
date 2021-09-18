import './App.css';
import React from 'react';
import Map from './Map.js'

function App() {

  function QuipComponent(props) {
    return <p>{props.quip}</p>;
  }

  return (  
      <div>
        <h1>A Clever Thought</h1>
        <QuipComponent quip="Don't believe everything you think." />
        <Map />
      </div> 
  )

}

export default App;
