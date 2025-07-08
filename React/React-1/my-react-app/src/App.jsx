import { useState } from 'react'
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const now= new Date()
  const variabletime=now.getHours()
 let greeting=""
  let greetingcolor={
color:'Red'
  }
 if(variabletime>-1 && variabletime<12){
  greeting="Morning"
 }
 else if(variabletime>11 &&  variabletime<18) {
greeting="Afternoon"
greetingcolor.color='Green'
 }

 else if (variabletime>17 && variabletime<24){
greeting="Evening"
greetingcolor.color="Blue"
 } 

  return (
    <>
      <h1 style={greetingcolor}>Good {greeting}</h1>
      <div className="card">

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
