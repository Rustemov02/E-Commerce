import React from 'react'
import { Stack, Typography, Button, Box, Paper } from '@mui/material'
import basket from './images/basket.svg'
import setting from './images/setting.svg'

export default function Announce() {

    const boxes = [
        {
            title : 'Used & New',
            icon : basket
        },
        {
            title : 'Services',
            icon : setting
        }
    ]
    const styles = {
        media: {
            '@media (max-width:500px)': {
                border: 'solid red 2px',
            },
        } 
    }
    return (
        <Stack direction="row" justifyContent='space-evenly' py={6} flexWrap='wrap' sx={styles.media} >


            {boxes.map((item, index) => (

                <Paper key={index} elevation={3} style={{ height: 250, maxWidth: 520 , width : '60%' , minWidth : 450, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "center" , padding : '4px' , margin : '10px'}} >

                    <Stack spacing={2} alignItems='flex-start' minWidth={200} >
                        <Typography fontSize={30} fontWeight={600}>{item.title}</Typography>
                        <Typography fontSize={18}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue orci, pretium nibh eget.</Typography>
                        <Button variant='contained' sx={{ color: 'black', backgroundColor: 'red', "&:hover": { color: 'red', backgroundColor: 'black' } }}>View More</Button>
                    </Stack>

                    <img src={item.icon} style={{ width: '40%' }} />
                </Paper>

            ))}





            {/*  

 
            <Paper elevation={5} sx={{ height: 250, width: 520, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "center", px: 2, py: 2 }} >

                <Stack spacing={2} alignItems='flex-start'>
                    <Typography fontSize={30} fontWeight={600}>Services</Typography>
                    <Typography fontSize={18}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue orci, pretium nibh eget.</Typography>
                    <Button variant='contained' sx={{ color: 'black', backgroundColor: 'red', "&:hover": { color: 'red', backgroundColor: 'black' } }}>View More</Button>
                </Stack>

                <img src={setting} style={{ width: 300 }} />
            </Paper> */}


        </Stack>
    )
}