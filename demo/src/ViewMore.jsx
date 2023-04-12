import { Button, Stack } from "@mui/material";
import React from "react";
import line from './images/line.svg'
import { useSelector } from "react-redux";

export default function ViewMore() {
    const mode = useSelector(state => state.product.mode)

    return (
        <Stack direction='row' alignItems='center' justifyContent='space-around' spacing={2} py={4}>
            <img src={line} style={{ width: '40%', minWidth: 10 }} />
            <Button size="large" variant='outlined' sx={{ backgroundColor: mode ? 'black' : 'white', borderColor: 'red', color: mode ? 'white' : "black", fontSize: 23, fontWeight: 500, width: '15%', minWidth: 200 }} > View More </Button>
            <img src={line} style={{ width: '40%', minWidth: 10 }} />
        </Stack>
    )
}