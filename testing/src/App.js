import React from 'react'
import './App.css'
export default function App() {
    
    const people =[
        {
            name:'kevin',
            age:30,
            weight:170,
            hobby:'soccer'
        },
        {
            name:'joe',
            age:31,
            weight:150,
            hobby:'video games'
        },
        {
            name:'kim',
            age:28,
            weight:120,
            hobby:'tik tok'
        },
        {
            name:'james',
            age:7,
            weight:70,
            hobby:'soccer'
        }
    ]


 const greeting = people.map((x)=>{
      return `hello, my name is ${x.name} and I like to play ${x.hobby}`
  })

  const greetTeam = people.filter((x)=>{
    return x.hobby.startsWith('s')
  })
  const greetTeamWithWords = greetTeam.map(x=>x.name)

  console.log(`${greetTeamWithWords.toString()} likes to play soccer `)
  console.log(greeting)

    return (
        <>
           hello, friend
        </>
    )
}






//React JS MINI PROJECTS
    //--random person generator (use API)
    //--clock
    //--counter
    //--todo list   
    //--weather app (use API)