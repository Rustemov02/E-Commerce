import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Stack, Typography, createTheme, ThemeProvider, List, ListItem, CssBaseline } from '@mui/material'
import { orange, purple } from '@mui/material/colors'
import { ManageSearch, Tune } from '@mui/icons-material/';
import commerce from './images/commerce.svg'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { useDispatch, useSelector } from 'react-redux'
import { getSelectedItem } from "./Redux/slice";

export default function Home() {
    const data = useSelector(state => state.product.data)
    const mode = useSelector(state => state.product.mode)
    const dispatch = useDispatch()
    const theme = createTheme({
        status: {
            danger: orange[500],
            default: '#fff'
        },
        mediaBody: {
            '@media (max-width:768px)': {
                // border: 'solid black 2px',
            },
            '@media (max-width:565px)': {
                // border: 'solid red 2px'
            }
        },
        imgMedia: {
            '@media (max-width:768px)': {
                display: 'none'
            }
        },
        palette: {
            mode: mode ? "dark" : 'light',
            primary: {
                main: purple[500],
                light: '#42a5f5'
            }
        },
        typography: {
            fontFamily: [
                'Poppins'
            ].join(','),
        }
    })
    const [resultsSearch, setResultsSearch] = useState([])
    function getResults(e) {
        const query = e.target.value

        if (query.length !== 0 && query !== ' ') {
            const matchingSearh = data.filter(item => item.title.toLowerCase().includes(query.toLowerCase()) || item.category.toLowerCase().includes(query.toLowerCase()))
            setResultsSearch(matchingSearh)
        }
        else {
            setResultsSearch([])
        }

    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Stack component='div' width='100%' bgcolor={mode ? "" : '#EAF6FF'} direction='row' alignItems='center' justifyContent='space-evenly' height='100vh' sx={theme.mediaBody}>

                <Stack direction='column' gap={4} width='auto' minWidth='240px' alignItems='center' paddingTop={5}>
                    <Typography sx={{ fontSize: 43, fontWeight: 400, width: '60%', minWidth: '250px', textAlign: "center", marginTop: 10 }}> Buy & Sell anything in your University Campus</Typography>
                    <FormControl sx={{ width: '60%', minWidth: '250px', height: 69 }} variant="outlined" >
                        <OutlinedInput
                            sx={{ border: mode ? 'solid black 3px' : 'solid red 3px', borderRadius: 40, px: 4 }}
                            placeholder='Search for any product'
                            onChange={getResults}
                            startAdornment={
                                <InputAdornment position="end" sx={{ marginRight: 2 }}>
                                    <ManageSearch sx={{ fontSize: 35 }} />
                                </InputAdornment>
                            }
                            endAdornment={
                                <InputAdornment position="end">
                                    <Tune sx={{ fontSize: 35 }} />
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                    {/* Search Result */}
                    <Stack sx={{ color: mode ? 'white' : 'black', width: '60%', minWidth: '240px', height: '250px', overflow: 'auto' }}>
                        <List>
                            {resultsSearch.map((item, index) => (
                                <ListItem key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', gap: 1, borderBottom: 'solid 1px' }}>

                                    <img src={item.image} height={50} width={50} />
                                    <Stack direction='column' alignItems='flex-start' width='80%' p={1}>
                                        <NavLink onClick={() => { dispatch(getSelectedItem(item.id)) }} to={`/products/${item.id}`} style={{ textDecoration: "none", color: mode ? 'white' : "black", width: '100%' }}>
                                            <Typography variant='h6' sx={{ textOverflow: 'ellipsis', overflow: "hidden", width: '100%', whiteSpace: 'nowrap' }} >{item.title}</Typography>
                                            <Typography variant='subtitle1' width='fit-content'>{item.category}</Typography>
                                        </NavLink>
                                    </Stack>
                                </ListItem>
                            ))}
                        </List>
                    </Stack>
                </Stack>
                <Stack sx={theme.imgMedia} width='auto' minWidth='150px'>
                    <img src={commerce} />
                </Stack>
            </Stack>
        </ThemeProvider >
    )
}