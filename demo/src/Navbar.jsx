import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Stack, Box, Typography, Button } from '@mui/material'
import { Login, HowToReg, ShoppingCart } from '@mui/icons-material';

import './Navbar.css'
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "./Redux/slice";

import Register from './Register'

export default function Navbar() {

  const dispatch = useDispatch()
  const [active, setActive] = useState('home')
  const cart = useSelector(state => state.product.cart)
  const mode = useSelector(state => state.product.mode)

  const styles = {
    customButton: {
      border: 'solid gray 1px',
      margin: '12px 10px',
      // color: 'black  '
    }
  }
  return (
    <Stack direction='row' justifyContent='space-evenly' alignItems='center' bgcolor={mode ? 'black' : 'white'}>

      {/* Logo */}
      <Box>
        <Typography sx={{ fontWeight: 600, fontSize: 30 , color : mode ? 'white' : 'black' }}>LA COLLECTION</Typography>
      </Box>

      {/* List */}
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {['Home', 'Products', 'Contact'].map((item, index) => (
          <NavLink to={item == 'Home' ? '/' : item.toLowerCase()} key={index} onClick={() => {
            setActive(item.toLocaleLowerCase())
          }} className={`navList ${active == item.toLocaleLowerCase() && 'navActive'}`} style={{ textDecoration: 'none' }}>
            {item}
          </NavLink>
        ))}
      </Box>

      <Stack spacing={2} direction='row'>  
        <Button startIcon={<HowToReg />} variant="contained" to='/register' ><NavLink style={{ textDecoration: "none", color: mode ? "black" : 'white' }} to='/register'>Register / Login</NavLink></Button>
        <Button startIcon={<ShoppingCart />} variant="contained" to='/register' ><NavLink style={{ textDecoration: "none", color: mode ? "black" : 'white' }} to='/cart'>Cart({cart.length})</NavLink></Button>
        <Button onClick={() => dispatch(changeMode())} sx={{position : 'fixed' , top : '50px', left : '70px'}}>Mode</Button>
      </Stack>
    </Stack>
  )
}