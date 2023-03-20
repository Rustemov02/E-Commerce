import React from 'react'
import { Stack, Box, Typography, Button, createTheme, ThemeProvider, TextField } from '@mui/material'
import model from './images/model-man.png'
import { orange, purple } from '@mui/material/colors'
import { ManageSearch, Tune, Visibility } from '@mui/icons-material/';
import commerce from './images/commerce.svg'

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
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
        }
    })
    const styles = {
        imgStyle: {
            width: 450
        }
    }

    return (
        <Stack component='div' bgcolor='#EAF6FF'  direction='row' alignItems='center' justifyContent='space-evenly' sx={{ height: '90vh' }}>

            <Stack direction='column' spacing={4}>
                <Typography sx={{ fontSize: 43, fontWeight: 400, width: 500, textAlign: 'center' }}> Buy & Sell anything in your University Campus</Typography>

                <FormControl sx={{ m: 1, width: '500px', height: 69 }} variant="outlined" >
                    <OutlinedInput
                        sx={{ border: 'solid red 3px ', borderRadius: 40, px: 4 }}
                        placeholder='Search for any product'

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
    )
}