import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Stack, Box, Typography, Button } from '@mui/material'
import { Login, HowToReg, ShoppingCart, LightMode, DarkMode, Light } from '@mui/icons-material';

import './Navbar.css'
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "./Redux/slice";


export default function Navbar() {

  const dispatch = useDispatch()
  const [active, setActive] = useState('home')
  const cart = useSelector(state => state.product.cart)
  const mode = useSelector(state => state.product.mode)

  return (
    <Stack p={2} direction='row' border={1} flexWrap='wrap' justifyContent='space-evenly' alignItems='center' bgcolor={mode ? 'black' : 'white'}  >

      {/* Logo */}
      <Box>
        <Typography sx={{ fontWeight: 600, fontSize: 30, color: mode ? 'white' : 'black' }}>LA COLLECTION</Typography>
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
        <Button startIcon={<HowToReg style={{ color: 'red' }} />} variant="outlined" to='/register' style={{ border: "solid red 1px" }}  ><NavLink style={{ textDecoration: "none", color: mode ? "white" : 'black' }} to='/register'>Register / Login</NavLink></Button>
        <Button startIcon={<ShoppingCart style={{ color: 'red' }} />} variant="outlined" to='/register' style={{ border: "solid red 1px" }}><NavLink style={{ textDecoration: "none", color: mode ? "white" : 'black' }} to='/cart'>Cart({cart.length})</NavLink></Button>
        <Button variant='outlined' style={{border : "solid red 1px"}} onClick={() => dispatch(changeMode())} >
          {mode ? < LightMode sx={{ color: 'red' }} /> : <DarkMode sx={{ color: 'red' }} />}
        </Button>
      </Stack>
    </Stack>
  )
}