import { Button, Stack, Box, Paper, Typography, CircularProgress, Skeleton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getSelectedItem } from "./Redux/slice";


export default function ProductItem() {
    const mode = useSelector(state => state.product.mode)

    const styles = {
        customPaper: {
            width: 300,
            display: 'flex',
            padding: '12px 0px',
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
            // border: 'solid gray 2px',
            border: 'solid #EB3223 2px',
            margin: '8px 10px',
            backgroundColor: mode ? 'black' : 'white'
        }
    }
    const products = useSelector(state => state.product.data)
    const isActive = useSelector(state => state.product.isActive)
    const dispatch = useDispatch()
    const Loading = () => {
        return (
            <Stack direction='row' justifyContent='space-evenly' spacing={3}>
                <Skeleton width={230} height={650} />
                <Skeleton width={230} height={650} />
                <Skeleton width={230} height={650} />
                <Skeleton width={230} height={650} />
            </Stack>
        )
    }

    return (
        <Stack direction='row' flexWrap='wrap' justifyContent='center' gap={2}>

            {isActive ? (products.map((item, index) => (
                <Paper key={index} elevation={10} sx={styles.customPaper}>

                    <img style={{ width: 200, height: 270 }} src={item.image} />
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography sx={styles.typography}>{item.title}</Typography>
                        <Typography sx={{ fontSize: 23, fontWeight: 700, color: '#EB3223' }}>${item.price}</Typography>
                    </Box>
                    <Button onClick={() => {
                        dispatch(getSelectedItem(item.id))
                    }} sx={styles.customButton} ><NavLink to={`/products/${item.id}`} style={{ textDecoration: 'none', color: mode ? 'white' : 'black' }}>Buy Now</NavLink></Button>

                </Paper>
            ))) : <Loading />}



        </Stack >
    )
}

