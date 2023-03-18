import { Button, Stack, Box, Paper, Typography, CircularProgress, Skeleton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSelectedItem ,getCart } from "./Redux/slice";


export default function ProductItem() {
    const styles = {
        customPaper: {
            width: 300,
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center",
            justifyContent: 'space-evenly',
            gap: 3
        },
        typography: {
            fontSize: 22,
            fontWeight: 700,
            width: 230,
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
        },
        customButton: {
            border: 'solid gray 2px',
            margin: '8px 10px',
            color: 'black',
        }
    }
    const products = useSelector(state => state.product.data)
    const isActive = useSelector(state => state.product.isActive)
    const dispatch = useDispatch()
    

    return (
        <Stack direction='row' flexWrap='wrap' justifyContent='center' gap={2}>


            {products.map((item, index) => (    
                <Paper key={index} elevation={3} sx={styles.customPaper}>
                    
                    {isActive ? <img style={{ width: 200, height: 270 }} src={item.image} /> : <CircularProgress />}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {isActive ? <Typography sx={styles.typography}>{item.title}</Typography> : <Skeleton variant="text" sx={{ height: 30, width: 220 }} />}
                        {isActive ? <Typography sx={{ fontSize: 23, fontWeight: 700 , color : '#EB3223' }}>${item.price}</Typography> : <Skeleton variant="text" sx={{ height: 30, width: 220 }} />}

                    </Box>  
                    {isActive ? <Button onClick={() => { 
                        dispatch(getSelectedItem(item.id)) 
                    }} sx={styles.customButton} ><Link to={`/products/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button> : <Skeleton variant="text" sx={{ height: 50, width: '30%' }} />}

                </Paper>
            ))
            }



        </Stack >
    )
}

