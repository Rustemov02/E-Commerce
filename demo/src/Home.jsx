import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Stack,Button ,Typography, createTheme, ThemeProvider, List, ListItem, CssBaseline } from '@mui/material'
import { orange, purple } from '@mui/material/colors'
import { ManageSearch, Tune } from '@mui/icons-material/';
import commerce from './images/commerce.svg'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { useSelector } from 'react-redux'

export default function Home() {
    const data = useSelector(state => state.product.data)
    const mode = useSelector(state => state.product.mode)

    const theme = createTheme({
        status: {
            danger: orange[500],
            default: '#fff'
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

        if (query.length != 0) {
            const matchingSearh = data.filter(item => item.title.toLowerCase().includes(query.toLowerCase()) || item.category.toLowerCase().includes(query.toLowerCase()))

            setResultsSearch(matchingSearh)
        } else {
            setResultsSearch([])
        }

    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Stack component='div' bgcolor={mode ? "" : '#EAF6FF'} direction='row' alignItems='center' justifyContent='space-evenly' sx={{ height: '90vh' }}>

                <Stack direction='column' spacing={4}>
                    <Typography sx={{ fontSize: 43, fontWeight: 400, width: 500, textAlign: 'center' }}> Buy & Sell anything in your University Campus</Typography>

                    <FormControl sx={{ m: 1, width: '500px', height: 69 }} variant="outlined" >
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

                    <Stack sx={{ color: mode ? 'white' : 'black', width: '550px', height: '250px', overflow: 'auto' }}>
                        <List>
                            {resultsSearch.map((item, index) => (
                                <ListItem key={index} sx={{ width: '500px' }}>
                                    <Stack direction='row' alignItems='center' spacing={1} justifyContent='space-evenly'>
                                        <img src={item.image} height={50} width={50} />

                                        <Stack direction='column' alignItems='flex-start' border={1} p={1}>
                                        {/* to={`/products/${item.id}`} */}
                                            <NavLink to='/products' style={{ textDecoration: "none", color: mode ? 'white' : "black" }}>
                                                <Typography variant='h6' sx={{ textOverflow: 'ellipsis', overflow: "hidden", width: '400px', whiteSpace: 'nowrap' }} >{item.title}</Typography>
                                                <Typography variant='subtitle1'>{item.category}</Typography>
                                            </NavLink>
                                        </Stack>

                                    </Stack>
                                </ListItem>
                            ))}
                        </List>
                    </Stack>


                </Stack>

                <img src={commerce} />

            </Stack>
        </ThemeProvider>
    )
}