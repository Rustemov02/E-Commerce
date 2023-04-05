import React from "react";
import { Stack, Typography, Box, TextField, Button, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { NavLink, useSearchParams } from "react-router-dom";
import rafiki from './images/rafiki.svg'
import { Google } from "@mui/icons-material";
import About from "./About";
import { useSelector } from "react-redux";
import { orange } from '@mui/material/colors'

export default function Register() {
    const mode = useSelector(state => state.product.mode)
    const theme = createTheme({
        palette: {
            mode: mode ? "dark" : 'light'
        }
    })
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Stack direction='row' justifyContent='space-evenly' alignItems='flex-start' py={4}>
              
               <img src={rafiki} style={{ width: 650 }} />

                <Stack direction='column' width='50%'>
                    <Stack direction='row' m='auto' spacing={2}>
                        <Button variant="standart" style={{ backgroundColor: '#d6d5ba', border: 'none', width: 210 }}><NavLink to={`/register`} style={{ textDecoration: 'none', color: mode ? 'black' : 'white' }}>Sign Up</NavLink></Button>
                        <Button variant="standart" style={{ backgroundColor: '#70c2be', border: 'none', width: 210 }}><NavLink to={`/register/signIn`} style={{ textDecoration: 'none', color: mode ? 'black' : 'white' }}>Sign In</NavLink></Button>
                    </Stack>
                    <Stack py={3} direction='column' alignItems='center' justifyContent='center' spacing={4}>

                        <Box>
                            <Typography fontSize={27} fontWeight={700} color={mode ? 'white' : 'black'}>Create an account</Typography>
                            <Typography variant="subtitle1" color='gray'>Let's get started with your 30 days free trial</Typography>
                        </Box>

                        <Stack direction='column' spacing={3}>
                            <TextField
                                sx={{ width: '320px' }}
                                label="Name"
                                type="text"
                                size="large"
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: '320px' }}
                                label="Email"
                                type="text"
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: '320px' }}
                                label="Password"
                                type="text"
                                variant="standard"
                            />
                        </Stack>

                        <Stack direction='column' alignItems='center' spacing={1.5}>
                            <Button variant='outlined' sx={{ borderRadius: 30, fontSize: 15, backgroundColor: 'red', color: 'white', width: 320, "&:hover": { backgroundColor: 'red' } }}>Create Account</Button>
                            <Button startIcon={<Google />} variant={mode ? 'contained' : "outlined"} sx={{ borderRadius: 30, fontSize: 15, border: "solid black 1px", color: 'black', width: 320 }}>Sign Up with Google</Button>
                        </Stack>


                        <Typography style={{ marginTop: '60px' }}>Already have an account? <NavLink to={`/register/signIn`} style={{ textDecoration: "none", color: 'blue' }} component="span">Sign In</NavLink></Typography>
                    </Stack>
                </Stack>

        
            </Stack>
            <About />
        </ThemeProvider >
    )
}