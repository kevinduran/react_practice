import React,{useState} from 'react'
export default function Todo() {
    const [todo,setTodo] = useState([]);

    
    const addTodo = () => {
        var me = document.querySelector('.todoInput').value
        setTodo([...todo,{name: me }])
        document.querySelector('.todoInput').value = '';
    }
    const remove = (name) => {
        console.log(todo)
       const removed = todo.filter((key)=>{
           return (key.name !== name)
       })
       setTodo(removed)
    }

    return (
        <div className="bigBoy">
            <div className="todoContainer">
                <input className="todoInput" />
                <button onClick={()=>addTodo()} className="btn">+</button>
            </div>

            <div className="todoItemContainer">
                {todo.map((myTodo)=>{
                    return (<div key={todo.length+1} className="todoItem">
                                <p>{myTodo.name}</p>
                                <button className='btn' onClick={()=>remove(myTodo.name)}>x</button>  
                            </div>)
                        
                })}
            </div>
        </div>
    )
}

