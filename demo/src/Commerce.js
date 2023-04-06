import React from "react";
import Home from './Home'
import Products from './Products'
import About from "./About";
import Announce from "./Announce";
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { useSelector } from "react-redux";

export default function Commerce() {
    const mode = useSelector(state => state.product.mode)
    const theme = createTheme({
        palette : {
            mode :mode ? 'dark' : 'light'
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <>
                <Home />
                {/* <Announce />
                <Products /> */}
            </>
        </ThemeProvider>
    )
}