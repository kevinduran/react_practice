import React, {useState}  from 'react'

export default function API() {
    const [ppl, getPpl] = useState('hello')
    
    const addPpl = ()=>{
        fetch('https://randomuser.me/api')
        .then(res=> res.json())
        .then(data=>getPpl(JSON.stringify(data.results[0])))

    }


    return (
        <div className="bigBoy" onClick={addPpl}>
          <div className="ppl">
          {ppl}    
          </div> 
        </div>
    )
}
