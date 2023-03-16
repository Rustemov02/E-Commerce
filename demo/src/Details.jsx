import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Stack, Typography, Box, Rating } from "@mui/material";

export default function Details() {
    const data = useSelector(state => state.product.selectedItem[0])



    const styles = {
        customButton: { 
            border : "solid black 1px",
            fontWeight : 600,
            "&:hover":{
                border : 'solid green 1px',
                backgroundColor : "gray" 
            }
        },
        customLink: { 
            textDecoration : 'none',
            color : 'black' ,
            '&:hover':{ 
                color : 'white'
            }
        }
    }

    return (
        <Stack direction='row' spacing={2} py={7} justifyContent='center' alignItems='center' height='auto'>
            <Box sx={{ width: '40%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img style={{ width: 340, height: 'auto' }} src={data.image} />
            </Box>

            <Box sx={{ width: '60%' }}>
                <Typography gutterBottom={true} variant='h5' sx={{ textTransform: 'uppercase', color: 'gray' }}>{data.category}</Typography>
                <Typography variant="h3" sx={{ width: '80%', fontWeight: 'bolder', fontFamily: 'Open Sans' }}>{data.title}</Typography>
                <Typography component='div' sx={{ display: 'flex', alignItems: "center", flexDirection: 'row', fontWeight: 600, fontSize: 18, paddingTop: 2 }}>Rating {data.rating.rate} </Typography>
                <Rating sx={{ paddingBottom: 2 }} value={data.rating.rate} precision={0.1} readOnly />

                <Typography variant="h4" sx={{ fontWeight: 600, py: 2 }}>$ {data.price}</Typography>

                <Typography variant="h6" sx={{ color: 'gray', width: '70%' }}>{data.description}</Typography>

                <Stack direction='row' justifyContent='flex-start' paddingTop={2} spacing={2}>
                    {/* <NavLink to={`/products/${data.id}`} style={styles.customLink}>Add to Cart</NavLink> */}
                    <Button sx={styles.customButton} variant="outlined" ><NavLink to={`/products/${data.id}`} style={styles.customLink}>Add to Cart</NavLink></Button>  
                    <Button sx={styles.customButton} variant='outlined'><NavLink to={`/products/${data.id}`} style={styles.customLink}>Go to Cart</NavLink></Button>
                </Stack>
            </Box>
        </Stack>
    )
}