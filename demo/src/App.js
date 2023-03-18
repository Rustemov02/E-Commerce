import React from 'react'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Commerce from './Commerce'
import Products from './Products'
import About from './About'
import Contact from './Contact'
import Details from './Details' 
import Cart from './Cart'

export default function App() {

  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={<Commerce />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<Details />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart/>} /> 
      </Routes> 
      
    </Router>
    </>
  )
}