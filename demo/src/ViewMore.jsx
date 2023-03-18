import { Button, Stack } from "@mui/material";
import React from "react";
import line from './images/line.svg'

export default function ViewMore() {

  

    return (
        <Stack direction='row' alignItems='center' justifyContent='space-around' spacing={2} py={4}> 
            <img src={line} style={{width : '500px'}}/>
            <Button size="large" variant="outlined" sx={{borderColor : 'red' , color : 'black' , fontSize : 23 , fontWeight : 500  }}>View More</Button>
            <img src={line} style={{width : '500px'}}/>

        </Stack>
    )
}