import React,{useState} from 'react'

export default function Todo() {
    const [todo,setTodo] = useState('');

    const addTodo = () => {
        setTodo([...todo,
            <div>test</div>
        ])
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
