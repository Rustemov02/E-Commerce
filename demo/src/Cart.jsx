import React, { useState } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux"; 

export default function Cart() {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.product.cart)
    const filteredCart = cart.filter((item, index) => index == cart.findIndex(elem => elem.title == item.title)) // remove duplicate items from cart

 
    return (
        <Stack py={5}>

            {filteredCart.map((item, index) => (
                <Stack key={index} direction='row' alignItems='center' justifyContent='space-evenly'>
                    <img style={{ width: 250 }} key={index} src={item.img} />

                    <Box >
                        <Typography>{item.title}</Typography>
                        <Typography>{cart.count} X {item.price} = ${cart.count * item.price}</Typography>
                    </Box>
                </Stack>
            ))}

        </Stack>
    )
}