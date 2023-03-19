import React from 'react'
import { Stack, Box, Typography,Button ,  createTheme, ThemeProvider } from '@mui/material'
import model from './images/model-man.png'
import { orange, purple } from '@mui/material/colors'
import {ManageSearch , Tune} from '@mui/icons-material/';

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
        <Stack component='div' bgcolor='#EAF6FF' sx={{ height: '90vh' }} direction='row' alignItems='center'>

            <Box>
                <Typography> Buy & Sell anything in your University Campus</Typography>
                <Button startIcon={<ManageSearch/>} endIcon={<Tune/>}>Search for any product</Button>
            </Box>

        </Stack>
    )
}