import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Home from './components/Home'
import SingleProduct from './components/SingleProduct'
import { Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Cart from './components/Cart'


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

      <Route path="login/" element = {
        <Login />} /> 

      <Route path="cart/" element = {
        <Cart />} /> 
      </Routes>
    </div>
    
  )
}

export default App
