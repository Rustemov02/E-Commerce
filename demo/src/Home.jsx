import React, { useEffect } from 'react'
import { Stack, Box, Typography, Button, createTheme, ThemeProvider, TextField } from '@mui/material'
import model from './images/model-man.png'
import { orange, purple } from '@mui/material/colors'
import { ManageSearch, Tune } from '@mui/icons-material/';
import commerce from './images/commerce.svg'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';


export default function Home() {
    const theme = createTheme({
        status: {
            danger: orange[500],
            default: '#fff'
        },
        palette: {
            primary: {
                main: purple[500],
                light: '#42a5f5'
            }
        },
        customFont: {

        },
        typography: {
            fontFamily: [
                'Poppins'
            ].join(','),
        }
    })
    const styles = {
        imgStyle: {
            width: 450
        }
    }
    const [value , setValue ] = useEffect('')

    return (
        <ThemeProvider theme={theme}>
            <Stack component='div' bgcolor='#EAF6FF' direction='row' alignItems='center' justifyContent='space-evenly' sx={{ height: '90vh' }}>

                <Stack direction='column' spacing={4}>
                    <Typography sx={{ fontSize: 43, fontWeight: 400, width: 500, textAlign: 'center' }}> Buy & Sell anything in your University Campus</Typography>

                    <FormControl sx={{ m: 1, width: '500px', height: 69 }} variant="outlined" >
                        <OutlinedInput
                            sx={{ border: 'solid red 3px ', borderRadius: 40, px: 4 }}
                            placeholder='Search for any product'
                            value={value}
                            onChange={(e)=>{
                                setValue(e.target.value)    
                            }}

                            startAdornment={
                                <InputAdornment position="end" sx={{ marginRight: 2 }}>
                                    <ManageSearch sx={{ fontSize: 35 }} />
                                </InputAdornment>
                            }

                            endAdornment={
                                <InputAdornment position="end">
                                    <Tune sx={{ fontSize: 35 }} />
                                </InputAdornment>
                            }

                        />
                    </FormControl>

                </Stack>

                <img src={commerce} />

            </Stack>
        </ThemeProvider>
    )
}