import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Home from './components/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation />
      <Home />
    </div>
    
  )
}

export default App
