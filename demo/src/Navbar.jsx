import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Stack, Box, Typography, Button } from '@mui/material'
import { Login, HowToReg, ShoppingCart } from '@mui/icons-material';

import './Navbar.css'
import { useSelector } from "react-redux";
export default function Navbar() {

  const [active, setActive] = useState('home')
  const value = useSelector(state => state.product.numberCart)
  
  const styles = {  
    customButton: {
      border: 'solid gray 1px',
      margin: '12px 10px',
      color: 'black  '
    }
  }
  return (
    <Stack direction='row' justifyContent='space-evenly' alignItems='center'>

      {/* Logo */}
      <Box>
        <Typography sx={{ fontWeight: 600, fontSize: 30 }}>LA COLLECTION</Typography>
      </Box>

      {/* List */}
      <Box sx={{display: 'flex' , flexDirection : 'row' , alignItems : 'center'}}>
        {['Home', 'Products', 'About', 'Contact'].map((item, index) => (
          <Link to={item == 'Home' ? '/' : item.toLowerCase()} key={index} onClick={() => {
            setActive(item.toLocaleLowerCase()) 
          }} className={`navList ${active == item.toLocaleLowerCase() && 'navActive'}`} style={{textDecoration : 'none'}}>
            {item}
          </Link>
        ))}
      </Box>

      <Box>
        <Button startIcon={<Login />} sx={styles.customButton}>Login</Button>
        <Button startIcon={<HowToReg />} sx={styles.customButton}>Register</Button>
        <Button startIcon={<ShoppingCart />} sx={styles.customButton}><Link style={{textDecoration : "none" , color : "black"}} to='/cart'>Cart({value})</Link></Button>
      </Box>
    </Stack>
  )
}