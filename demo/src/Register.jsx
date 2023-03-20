import React from "react";
import { Stack, Typography, Box, TextField, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import rafiki from './images/rafiki.svg'


export function SignUp() {


    return (
        <Stack py={3} border={1} direction='column' alignItems='center' justifyContent='center' width='50%' spacing={4}>
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


            <Typography style={{ marginTop: '60px' }}>Already have an account? <NavLink style={{ textDecoration: "none", color: 'blue' }} component="span">Sign In</NavLink></Typography>
        </Stack>
    )
}

export default function SignIn() {


    return (
        <Stack py={5} border={1} direction='column' alignItems='center' justifyContent='center' width='50%' spacing={4}>
            <Box>
                <Typography fontSize={27} fontWeight={700}>Login</Typography>
                <Typography variant="subtitle1" color='gray'>Welcome Back</Typography>
            </Box>

            <Stack direction='column' spacing={3}>
                <TextField
                    sx={{ width: '320px' }}
                    label="Email"
                    type="text"
                    variant="standard"
                />
                <TextField
                    sx={{ width: '320px' }}
                    label="Password"
                    type="password"
                    size="large"
                    variant="standard"
                />
            </Stack>

            <Stack direction='column' alignItems='center' spacing={1.5}>
                <Button variant="contained" sx={{ borderRadius: 30, fontSize: 15, backgroundColor: 'red', color: 'white', width: 320, "&:hover": { backgroundColor: 'red' } }}>Login</Button>
                <Button startIcon={<Google />} variant="outlined" sx={{ borderRadius: 30, fontSize: 15, border: "solid black 1px", color: "red", width: 320 }}>Sign İn with Google</Button>
            </Stack>


            <Typography style={{ marginTop: '60px' }}>Don't have an account? <NavLink style={{ textDecoration: "none", color: 'blue' }} component="span">Sign Up</NavLink></Typography>
        </Stack>
    )
}
export default function Register() {

    return (
        <Stack>
            <Box>
                <Button variant="contained"><NavLink to="/register/">Sign Up</NavLink></Button> 
                <Button variant="contained"><NavLink>Sign In</NavLink></Button>
            </Box>




        </Stack>
    )
}