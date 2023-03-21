import React from "react";
import { Stack, Typography, Box, TextField, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import rafiki from './images/rafiki.svg'
import { Google } from "@mui/icons-material";
import About from "./About";


export default function Register() {

    return (
        <>
            <Stack direction='row' justifyContent='center' alignItems='center' py={4}>
                <img src={rafiki} style={{ width: 650 }} />

                <Stack direction='column' width='50%'>
                    <Stack direction='row' m='auto' spacing={2}>
                        <Button variant="standart" style={{ backgroundColor: '#d6d5ba', border: 'none', width: 210 }}><NavLink to={`/register`} style={{ textDecoration: 'none', color: 'black' }}>Sign Up</NavLink></Button>
                        <Button variant="standart" style={{ backgroundColor: '#70c2be', border: 'none', width: 210 }}><NavLink to={`/register/signIn`} style={{ textDecoration: 'none', color: 'black' }}>Sign In</NavLink></Button>
                    </Stack>
                    <Stack py={3} direction='column' alignItems='center' justifyContent='center' spacing={4}>

                        <Box>
                            <Typography fontSize={27} fontWeight={700}>Create an account</Typography>
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
                            <Button variant="contained" sx={{ borderRadius: 30, fontSize: 15, backgroundColor: 'red', color: 'white', width: 320, "&:hover": { backgroundColor: 'red' } }}>Create Account</Button>
                            <Button startIcon={<Google />} variant="outlined" sx={{ borderRadius: 30, fontSize: 15, border: "solid black 1px", color: "red", width: 320 }}>Sign Up with Google</Button>
                        </Stack>


                        <Typography style={{ marginTop: '60px' }}>Already have an account? <NavLink to={`/register`} style={{ textDecoration: "none", color: 'blue' }} component="span">Sign In</NavLink></Typography>
                    </Stack>
                </Stack>



            </Stack>
            <About />
        </>
    )
}