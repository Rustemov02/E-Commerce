import React from 'react'
import { Stack, Typography, Button, Paper } from '@mui/material'
import basket from './images/basket.svg'
import setting from './images/setting.svg'

export default function Announce() {

    const boxes = [
        {
            title: 'Used & New',
            icon: basket
        },
        {
            title: 'Services',
            icon: setting
        }
    ]
    return (
        <Stack direction="row" justifyContent='space-evenly' py={6} flexWrap='wrap' >

            {boxes.map((item, index) => (
                <Paper key={index} elevation={3} style={{ maxWidth: 520, width: '60%', minWidth: 250, display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', justifyContent: "center", flexWrap: 'wrap', padding: '5px', margin: '10px', '@media (max-width:500px)': {} }} >

                    <img src={item.icon} style={{ width: '40%' }} />

                    <Stack spacing={2} alignItems='flex-start' width={200} minWidth={150} >
                        <Typography fontSize={30} textAlign='center' fontWeight={600}>{item.title}</Typography>
                        <Typography fontSize={18}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue orci, pretium nibh eget.</Typography>
                        <Button variant='contained' sx={{ color: 'black', backgroundColor: 'red', "&:hover": { color: 'red', backgroundColor: 'black' } }}>View More</Button>
                    </Stack>
                </Paper>
            ))}
        </Stack>
    )
}