import { useState } from 'react'
import './App.css'
import Navigation from './components/navigation'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation />
    </div>
    
  )
}

export default App
