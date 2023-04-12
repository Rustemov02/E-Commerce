import React from "react";
import { Stack, Typography, Box, TextField, Button, ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { Google } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import rafiki from './images/rafiki.svg'
import About from './About'
import { useSelector } from "react-redux";

export default function SignIn() {
    const mode = useSelector(state => state.product.mode)
    const theme = createTheme({
        palette: {
            mode: mode ? 'dark' : 'light'
        }
    })
    const inputStyle = {
        width: '100%'
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Stack direction='row' justifyContent='space-evenly' alignItems='flex-start' py={4}>
                <Box sx={{
                    width: '45%', '@media (max-width:860px)': {
                        display: 'none',
                        border: 'solid red 1px'
                    }
                }}>
                    <img src={rafiki} style={{
                        width: '100%'
                    }} />
                </Box>
                <Stack direction='column' width='50%' minWidth='fit-content' sx={{ '@media (max-width : 860px)': { width: '100%' } }}>
                    <Stack direction='row' flexWrap='wrap' justifyContent='center' m='auto' gap={1}>
                        <Button variant="standart" style={{ backgroundColor: '#d6d5ba', border: 'none', width: 210 }}  ><NavLink to={`/register`} style={{ textDecoration: 'none', color: mode ? 'black' : 'white' }}>Sign Up</NavLink></Button>
                        <Button variant="standart" style={{ backgroundColor: '#70c2be', border: 'none', width: 210 }}><NavLink to={`/register/signIn`} style={{ textDecoration: 'none', color: mode ? 'black' : 'white' }}>Sign In</NavLink></Button>
                    </Stack>

                    <Stack py={5} direction='column' alignItems='center' justifyContent='center' spacing={4}>
                        <Box textAlign='center' width='60%' sx={{ '@media (max-width : 860px)': { width: '60%' } }}>
                            <Typography fontSize={27} fontWeight={700}>Login</Typography>
                            <Typography variant="subtitle1" color='gray'>Welcome Back</Typography>
                        </Box>
                        <Stack direction='column' spacing={3} width='350px' sx={{ '@media (max-width : 500px)': { width: '70%' } }}>
                            <TextField
                                sx={inputStyle}
                                label="Email"
                                type="text"
                                variant="standard"
                            />
                            <TextField
                                sx={inputStyle}
                                label="Password"
                                type="password"
                                size="large"
                                variant="standard"
                            />
                        </Stack>
                        <Stack direction='column' alignItems='center' spacing={1.5} width='350px' sx={{ '@media (max-width : 500px)': { width: '70%' } }}>
                            <Button variant="contained" sx={{ borderRadius: 30, fontSize: 15, backgroundColor: 'red', color: 'white', width: '100%', "&:hover": { backgroundColor: 'red' } }}>Login</Button>
                            <Button startIcon={<Google />} variant={mode ? 'contained' : "outlined"} sx={{ borderRadius: 30, fontSize: 15, border: "solid black 1px", color: "black", width: '100%' }}>Sign İn with Google</Button>
                        </Stack>
                        <Typography style={{ marginTop: '60px' }}>Don't have an account? <NavLink to={`/register`} style={{ textDecoration: "none", color: 'blue' }} component="span">Sign Up</NavLink></Typography>
                    </Stack>
                </Stack>
            </Stack>
            <About />
        </ThemeProvider>
    )
}