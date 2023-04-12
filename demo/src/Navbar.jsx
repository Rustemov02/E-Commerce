import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Stack, Box, Typography, Button } from '@mui/material'
import { HowToReg, ShoppingCart, LightMode, DarkMode } from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "./Redux/slice";
import './Navbar.css'
 
export default function Navbar() {

  const dispatch = useDispatch()
  const [active, setActive] = useState('home')
  const cart = useSelector(state => state.product.cart)
  const mode = useSelector(state => state.product.mode)

  return (
    <Stack p={2} direction='row' flexWrap='wrap' justifyContent='space-evenly' alignItems='center' bgcolor={mode ? 'black' : 'white'}  >

      {/* Logo */}
      <Box>
        <Typography sx={{ fontWeight: 600, fontSize: 30, textAlign: "center", color: mode ? 'white' : 'black' }}>LA COLLECTION</Typography>
      </Box>

      {/* List */}
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
        {['Home', 'Products', 'Contact'].map((item, index) => (
          <NavLink to={item == 'Home' ? '/' : item.toLowerCase()} key={index} onClick={() => {
            setActive(item.toLocaleLowerCase())
          }} className={`navList ${active == item.toLocaleLowerCase() && 'navActive'}`} style={{ textDecoration: 'none' }}>
            {item}
          </NavLink>
        ))}
      </Box>

      <Stack direction='row' flexWrap='wrap' justifyContent='center' gap={1}>
        <Button startIcon={<HowToReg style={{ color: 'red' }} />} variant="outlined" to='/register' style={{ border: "solid red 1px" }}  ><NavLink style={{ textDecoration: "none", color: mode ? "white" : 'black' }} to='/register'>Register / Login</NavLink></Button>
        <Button startIcon={<ShoppingCart style={{ color: 'red' }} />} variant="outlined" to='/register' style={{ border: "solid red 1px" }}><NavLink style={{ textDecoration: "none", color: mode ? "white" : 'black' }} to='/cart'>Cart({cart.length})</NavLink></Button>
        <Button variant='outlined' style={{ border: "solid red 1px" }} onClick={() => dispatch(changeMode())} >
          {mode ? < LightMode sx={{ color: 'red' }} /> : <DarkMode sx={{ color: 'red' }} />}
        </Button>
      </Stack>
    </Stack>
  )
}