import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Home from './components/Home'
import SingleProduct from './components/SingleProduct'
import { Route, Routes } from 'react-router-dom'
import Register from './components/register'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation />
      <Routes>
      <Route path = "/" element = {  
      <Home /> } />
    
      <Route path = "products/:id" element = {
      <SingleProduct /> } />
     

      <Route path = "register/" element = {
        <Register />} />

      </Routes>
    </div>
    
  )
}

export default App
