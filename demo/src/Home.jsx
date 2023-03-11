import React from 'react'
import { Stack , Box, Typography} from '@mui/material'
import model from './images/model-man.png'

export default function Home() {


    return (
        <Stack>

            <Box>
                <img src={model} style={{width : 150}}/>
            </Box>

            <Box>
                <Typography>New Season Arrivals </Typography>
                <Typography>Check out all the triends </Typography>
            </Box>
        </Stack>
    )
}