import React, {useState, useEffect}  from 'react'

export default function API() {
    const [ppl, getPpl] = useState('hello')
    
    useEffect(() => {
        fetch('https://randomuser.me/api')
        .then(res=> res.json())
        .then(data=>getPpl(JSON.stringify(data.results[0]), console.log(data.results[0].name.first)))

    },[])
       
 


    return (
        <div className="bigBoy" >
          <div className="ppl">
          {ppl}    
          </div> 
        </div>
    )
}
