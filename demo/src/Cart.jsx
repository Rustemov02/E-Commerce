import React, { useState } from "react";
import { Box, Stack, Typography , Button} from "@mui/material";
import { useSelector } from "react-redux";

export default function Cart() {

    const cart = useSelector(state => state.product.cart)
    // const filteredCart = cart.filter((item, index) => index == cart.findIndex(elem => elem.title == item.title)) // remove duplicate items from cart
    // let [count , setCount ] = useState(1)
    
    return (
        <Stack py={5}>
 
            {cart.map((item, index) => (
                <Stack key={index} direction='row' alignItems='center' justifyContent='space-evenly'>
                    <img style={{ width: 250}} key={index} src={item.img} />

                    <Box >
                        <Typography>{item.title}</Typography> 
                        <Typography>{count} X {item.price} = ${count * item.price}</Typography> 
                        <Button onClick={()=>{
                            setCount(count += 1)
                            
                        }}>+</Button>
                        <Button onClick={()=> count >= 2 ? setCount(count -= 1) : setCount(1) }>-</Button>
                    </Box>
                </Stack>
            ))}

        </Stack>
    )
}