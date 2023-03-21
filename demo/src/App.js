import React from 'react'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Commerce from './Commerce'
import Products from './Products'
import Contact from './Contact'
import Details from './Details'
import Cart from './Cart'
import Register from './Register'
import SignIn from './SignIn'
import SignUp from './SignUp'

export default function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Commerce />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Details />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/register' element={<Register />} />
          <Route path='/register/signIn' element={<SignIn />} />


        </Routes>

      </Router>
    </>
  )
}