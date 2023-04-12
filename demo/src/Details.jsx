import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Stack, Typography, Box, Rating, ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { getCart } from "./Redux/slice";

export default function Details() {

    const dispatch = useDispatch()
    const mode = useSelector(state => state.product.mode)
    const data = useSelector(state => state.product.selectedItem[0])
    const [active, setActive] = useState(false)
    const [value, setValue] = useState('Add To Cart')
    const theme = createTheme({
        palette: {
            mode: mode ? 'dark' : 'light'
        }
    })
    const styles = {
        customButton: {
            fontWeight: 600,
            "&:hover": {
                border: 'solid green 1px',
                backgroundColor: "gray"
            }
        },
        customLink: {
            textDecoration: 'none',
            color: 'black',
            '&:hover': {
                color: 'white'
            }
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Stack direction='row' gap={5} py={7} justifyContent='space-around' alignItems='flex-start' flexWrap='wrap' height='auto'>

                <Box sx={{ width: '340px', minWidth: '100px' }}>
                    <img style={{ width: '100%', height: 'auto' }} src={data.image} />
                </Box>

                <Box sx={{ width: '60%', minWidth: '150px', padding: '10px' }}>

                    <Typography gutterBottom={true} variant='h5' sx={{ textTransform: 'uppercase', color: 'gray' }}>{data.category}</Typography>
                    <Typography variant="h3" sx={{ width: '80%', fontWeight: 'bolder', fontFamily: 'Open Sans' }}>{data.title}</Typography>
                    <Typography component='div' sx={{ display: 'flex', alignItems: "center", flexDirection: 'row', fontWeight: 600, fontSize: 18, paddingTop: 2 }}>Rating {data.rating.rate} </Typography>
                    <Rating sx={{ paddingBottom: 2 }} value={data.rating.rate} precision={0.1} readOnly />
                    <Typography variant="h4" sx={{ fontWeight: 600, py: 2 }}>$ {data.price}</Typography>
                    <Typography variant="h6" sx={{ color: 'gray', width: '70%' }}>{data.description}</Typography>
                    <Stack direction='row' justifyContent='flex-start' flexWrap='wrap' paddingTop={2} gap={2}>
                        <Button disabled={active} onClick={() => {
                            dispatch(getCart(data))
                            setActive(true)
                            setValue('Added')
                        }} sx={styles.customButton} variant={mode ? 'contained' : 'outlined'} ><NavLink to={`/products/${data.id}`} style={styles.customLink}>{value}</NavLink></Button>
                        <Button sx={styles.customButton} variant={mode ? 'contained' : "outlined"}><NavLink to='/cart' style={styles.customLink}>Go to Cart</NavLink></Button>
                    </Stack>
                </Box> 
            </Stack>
        </ThemeProvider>
    )
}