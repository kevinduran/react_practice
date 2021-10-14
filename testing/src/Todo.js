import React,{useState} from 'react'

export default function Todo() {
    const [todo,setTodo] = useState([]);

    const remove = () => {
        console.log('removed')
        //need to loop through list of todo
        //identify which one is ours
        //somehow remove it 
    }

    const addTodo = () => {
        setTodo([...todo,
            <div 
                className="todoItem"
                // need a "key"
            >
                {document.querySelector('.todoInput').value}
                <button className="btn" onClick={remove}>x</button>
            </div>
        ])
        document.querySelector('.todoInput').value = '';
    }


    return (
        <div className="bigBoy">
            <div className="todoContainer">
                <input
                    className="todoInput"            
                />
                <button onClick={addTodo} className="btn">add</button>
            </div>

            <div>{todo}</div>
        </div>
    )
}


//NOT SOLVED