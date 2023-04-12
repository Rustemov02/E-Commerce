import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import { Button, Stack, Typography, Box, ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./Redux/slice";
import ViewMore from "./ViewMore";
import About from './About'
import line from './images/line.svg'

export default function Products() {
    const mode = useSelector(state => state.product.mode)
    const dispatch = useDispatch()
    const theme = createTheme({
        mode: mode ? 'dark' : 'light',
        palette: {
            mode: mode ? 'dark' : 'light'
        }
    })
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
            border: 'solid #EB3223 2px',
            backgroundColor: mode ? 'black' : 'white',
            margin: '8px 10px',
            color: mode ? 'white' : 'black',
            transition: '0.5s',
            '&:hover': {
                border: "solid red 2px",
                backgroundColor: '#EB3223'
            }
        },
        customLine: {
            width: '60%',
            margin: 'auto',
            marginTop: 20
        }
    }

    useEffect(() => {
        dispatch(fetchProduct(categories[0].link))
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Stack paddingTop={10} direction='column' justifyContent='center' spacing={5}>
                <Typography variant="h4" sx={{ fontWeight: 600, margin: 'auto', textAlign: "center" }}>Latest Products</Typography>
                <img src={line} style={styles.customLine} />
                <Box sx={{ display: 'flex', flexDirection: 'row', display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
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
                <ViewMore />
                <About />
            </Stack>
        </ThemeProvider>
    )
}