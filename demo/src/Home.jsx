import React from 'react'
import { Stack , Box, Typography, createTheme, ThemeProvider} from '@mui/material'
import model from './images/model-man.png'
import { orange, purple } from '@mui/material/colors'

export default function Home() {
    const theme = createTheme({
        status : {
                danger : orange[500],
                default : '#fff'
        },
        palette : {
            primary : {
                main : purple[500], 
                light : '#42a5f5'
            }
        }
    })
    const styles = {
        imgStyle : {
            width : 450 
        }
    }

    return (
        <Stack component='div' bgcolor={theme.palette.primary.light} sx={{height : '90vh'}} direction='row' alignItems='center'>
            <ThemeProvider theme={theme}>   

            <Box sx={{width : 'fit-content' , position : 'absolute' , left : '60%' , top : '15%'}}>
                <img src={model} style={styles.imgStyle}/>
            </Box>

            <Box>
                <Typography sx={{color : theme.status.default , marginLeft : '30px' , paddingLeft : '50px' , fontSize : '80px'}}>New Season Arrivals </Typography>
                <Typography sx={{ color : theme.status.default , marginLeft : '30px' , paddingLeft : '50px' ,fontSize : '50px'}}>Check out all the triends </Typography>
            </Box>
        </ThemeProvider>
        </Stack>
    )
}