import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import { Button, Stack, Typography, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./Redux/slice";
import { Link } from "react-router-dom";

export default function Products() {

    // const categories = ['All', 'Men\'s Clothing', 'Women\'s Clothing', 'Jewelery', 'Electronic']
    const categories = [
        {
            title: 'All',
            link: "products/"
        },
        {
            title: 'Men\'s Clothing',
            link: "products/category/men's clothing"
        },
        {
            title: 'Women\'s Clothing',
            link: "products/category/women's clothing"
        },
        {
            title: 'Jewelery',
            link: "products/category/jewelery"
        },
        {
            title: 'Electronic',
            link: "products/category/electronics"
        }
    ]
    const styles = {
        customButton: {
            border: 'solid gray 2px',
            margin: '8px 10px',
            color: 'black'
        }
    }
    const dispatch = useDispatch()
    const product = useSelector(state => state.product.data)

    useEffect(() => {
        dispatch(fetchProduct(categories[0].link))
    }, [])
    return (
        <Stack py={10} direction='column' justifyContent='center' alignItems='center' spacing={5}>
            <Button><Link to="/">Get Menu</Link></Button>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>Latest Products</Typography>


            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                {categories.map((item, index) => (
                    <Button
                        onClick={() => {
                            dispatch(fetchProduct(item.link))
                        }}
                        sx={styles.customButton}
                        key={index}>
                        {item.title}
                    </Button>
                ))}
            </Box>

            <ProductItem />
        </Stack>
    )
}