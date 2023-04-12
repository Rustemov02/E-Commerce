import React from "react";
import { Box, Stack, Typography, Button, ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./Redux/slice";

export default function Cart() {
    const mode = useSelector(state => state.product.mode) 
    const cart = useSelector(state => state.product.cart)
    const filteredCart = cart.filter((item, index) => index == cart.findIndex(elem => elem.title == item.title)) // remove duplicate items from cart
    const dispatch = useDispatch()
    const theme = createTheme({
        palette: {
            mode: mode ? 'dark' : 'light'
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Stack py={5}>

                {cart.length > 0 ? (
                    <Stack direction='column' justifyContent='space-around' alignItems='space-around'>
                        {filteredCart.map((item, index) => (
                            <Stack key={index} direction='row' alignItems='center' justifyContent='center' flexWrap='wrap' gap={5} py={3} my={4} bgcolor={mode ? '#2f3336' : '#ebf1f5'}  >

                                <img style={{ width: '350px', height: 350, borderRadius: 20, padding: 10 }} src={item.img} />

                                <Stack width={450} p={2}>
                                    <Box >
                                        <Typography fontSize={24} fontWeight={700} >{item.title}</Typography>
                                        <Typography variant="subtitle1" fontWeight={600}> {item.quantity} X {item.price} = ${item.quantity * item.price}</Typography>
                                    </Box>

                                    <Stack direction='row' spacing={3} justifyContent='flex-start' my={2}>
                                        <Button size="small" sx={{ fontSize: 45, height: 40, color: 'black', borderColor: 'black' }} variant={mode ? 'contained' : 'outlined'} onClick={() => dispatch(decrease(item.title))}>-</Button>
                                        <Button size="small" sx={{ height: 40, fontSize: 45, color: 'black', borderColor: 'black' }} variant={mode ? 'contained' : 'outlined'} onClick={() => dispatch(increase(item.title))}>+</Button>
                                    </Stack>

                                </Stack>
                            </Stack>
                        ))}



                    </Stack>
                ) : (
                    <Stack bgcolor={mode ? '#2f3336' : '#ebf1f5'} height='auto' px={12} py={12}  > <Typography fontSize={40} >Your Cart is Empty...</Typography> </Stack>
                )}

            </Stack>
        </ThemeProvider>
    )
}
