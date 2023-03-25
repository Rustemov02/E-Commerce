import React, { useState } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./Redux/slice";

export default function Cart() {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.product.cart)
    const filteredCart = cart.filter((item, index) => index == cart.findIndex(elem => elem.title == item.title)) // remove duplicate items from cart

    const arr = [1, 2, 3, 4, 5, 6];
    // const isActive = false

    return (
        <Stack py={5}>

            {cart.length > 0 ? (
                <Stack border={1} direction='column' justifyContent='space-around' alignItems='space-around'>
                    {filteredCart.map((item, index) => (
                        <Stack key={index} direction='row' alignItems='center' justifyContent='center' spacing={5} py={3}>
                            <img style={{ width: 250 , height : 350}} src={item.img} />

                            <Stack width={450}>
                                <Box >
                                    <Typography fontSize={24} fontWeight={700}>{item.title}</Typography>
                                    <Typography variant="subtitle1" fontWeight={600}> {item.quantity} X {item.price} = ${item.quantity * item.price}</Typography>
                                </Box>

                                <Stack direction='row' spacing={3} justifyContent='flex-start' my={2}>
                                    <Button sx={{fontSize : 20}} variant='contained' onClick={() => dispatch(decrease(item.title))}>-</Button>
                                    <Button size="small" sx={{fontSize : 20}} variant="contained" onClick={() => dispatch(increase(item.title))}>+</Button>
                                </Stack>

                            </Stack>
                        </Stack>
                    ))}



                </Stack>
            ) : (
                <div> Your Cart is Empty </div>
            )}








        </Stack>
    )
}


{/* < div >
{filteredCart.map((item, index) => {
    <Stack key={index} direction='row' alignItems='center' justifyContent='space-evenly'>
        <img style={{ width: 250 }} key={index} src={item.img} />

        <Box >
            <Typography>{item.title}</Typography>
            <Typography> {item.quantity} X {item.price} = ${item.quantity * item.price}</Typography>
        </Box>
        <Button onClick={() => dispatch(increase(item.title))}>+</Button>
        <Button onClick={() => dispatch(decrease(item.title))}>-</Button>
    </Stack>


})
} </div> */}