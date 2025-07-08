import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   const luckyno=7;
   const d = new Date();
let year = d.getFullYear();
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
     <div>
      <h1>Created by Harsh</h1>
  <p>Copyright {year}</p>
  <img className='IMAGE' src='https://th.bing.com/th/id/OIP.TEC9iHbQoZVuqHdT8b-asQHaLG?w=204&h=306&c=7&r=0&o=5&dpr=2&pid=1.7' alt="First image" />
  <img className='IMAGE' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0FA9iXkN50PJeYIrTOwWyeg64hRxTEfH-Cg&s'>
  </img>
  </div> 
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
