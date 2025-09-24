import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{textAlign: 'center',padding: '2rem'}}>
      <h1>Weather Dashboard</h1>
      <p>Powered by react and django</p>
      
    </div>
  )
}

export default App
