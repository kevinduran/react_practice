import React, {useState} from 'react'



function Practice() {

    const [todo,setTodo] = useState([])

    const addTodo = () =>{
        const myInput = document.querySelector('.input').value
        setTodo([...todo,{name:myInput, key:myInput}])
        document.querySelector('.input').value = ''
    }

    const remove = (myInput) => {
        const filteredList = todo.filter((x)=>{
          return  (x.name !== myInput)
        })
        setTodo(filteredList)
    }



  return (
    <div className="bigBoy">
        <div className="inputContainer">
            <input className="input"></input>
            <button className="btn" onClick={()=>addTodo()}>+</button>
        </div>
        <div className="outputContainer">
            {todo.map((x)=>{
                return(
                    <div className='outputItem'>
                        <p>{x.name}</p>
                        <button className="btn" onClick={()=>remove(x.name)}>x</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Practice




















































// import React, {useState} from 'react'

// export default function Practice() {

//     const [todo,addTodo] = useState([])

//     const addData = ()=>{
//         let todoName = document.querySelector('.input').value
//         addTodo([...todo,{name:todoName, key: todoName}])
//         document.querySelector('.input').value = ''
//     }
//     const remove = (myInput) => {
//         let filteredList = todo.filter((x)=>{
//             return (x.name !== myInput )
//         })
//         addTodo(filteredList)

//     }

//     return (
//         <div className="bigBoy">
//             <div className="inputContainer">
//                 <input className="input" />
//                 <button onClick={()=>addData()} className="btn">add</button>
//             </div>
//             <div className="outputContainer">
//                 {todo.map((x)=>{
//                     return(
//                         <div className="outputItem">
//                             <p>{x.name}</p>
//                             <button className="btn" onClick={()=>remove(x.name)}>remove</button>                 
//                         </div>
//                    )
//                 })}
//             </div>
//         </div>
//     )
// }

