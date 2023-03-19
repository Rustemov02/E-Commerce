import React from 'react'
import { Stack, Typography, Button, Box, Paper } from '@mui/material'
import basket from './images/basket.svg'
import setting from './images/setting.svg'

export default function Announce() {



    return (
        <Stack direction="row" justifyContent='space-evenly' py={6}>
            <Paper elevation={5} sx={{ height: 250, width: 520, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "center", px: 2, py: 2 }} >

                <Stack spacing={2} alignItems='flex-start' >
                    <Typography fontSize={30} fontWeight={600}>Used &  New</Typography>
                    <Typography fontSize={18}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue orci, pretium nibh eget.</Typography>
                    <Button variant='contained' sx={{ color: 'black', backgroundColor: 'red', "&:hover": { color: 'red', backgroundColor: 'black' } }}>View More</Button>
                </Stack>

                <img src={basket} style={{ width: 300 }} />
            </Paper>




            <Paper elevation={5} sx={{ height: 250, width: 520, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "center", px: 2, py: 2 }} >

                <Stack spacing={2} alignItems='flex-start'>
                    <Typography fontSize={30} fontWeight={600}>Services</Typography>
                    <Typography fontSize={18}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue orci, pretium nibh eget.</Typography>
                    <Button variant='contained' sx={{ color: 'black', backgroundColor: 'red', "&:hover": { color: 'red', backgroundColor: 'black' } }}>View More</Button>
                </Stack>

                <img src={setting} style={{ width: 300 }} />
            </Paper>


        </Stack>
    )
}