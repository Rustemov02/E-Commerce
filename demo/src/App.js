import React from 'react'

import TestAPI from './TestAPI'
import { Route, BrowserRouter as Router , Routes } from 'react-router-dom'
import Commerce from './Commerce'
import Products from './Products'
import About from './About'
import Contact from './Contact'
import Details from './Details'

export default function App() {
 
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Commerce />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<Details />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes> 
      
    </Router>
  )
}