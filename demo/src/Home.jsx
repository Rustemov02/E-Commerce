import React, { useState } from 'react'
import { Stack, Box, Typography, Button, createTheme, ThemeProvider, TextField, List, ListItem, ListItemText } from '@mui/material'
import model from './images/model-man.png'
import { orange, purple } from '@mui/material/colors'
import { ManageSearch, QueryStatsRounded, QueryStatsTwoTone, Tune } from '@mui/icons-material/';
import commerce from './images/commerce.svg'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { useSelector } from 'react-redux'

export default function Home() {
    const data = useSelector(state => state.product.data)
    const theme = createTheme({
        status: {
            danger: orange[500],
            default: '#fff'
        },
        palette: {
            primary: {
                main: purple[500],
                light: '#42a5f5'
            }
        },
        customFont: {

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
            const matchingSearh = data.filter(item =>  item.title.toLowerCase().includes(query.toLowerCase()) || item.category.toLowerCase().includes(query.toLowerCase()) )

            setResultsSearch(matchingSearh)
        } else{
            setResultsSearch([])
        }

    }

    return (
        <ThemeProvider theme={theme}>
            <Stack component='div' bgcolor='#EAF6FF' direction='row' alignItems='center' justifyContent='space-evenly' sx={{ height: '90vh' }}>

                <Stack direction='column' spacing={4}>
                    <Typography sx={{ fontSize: 43, fontWeight: 400, width: 500, textAlign: 'center' }}> Buy & Sell anything in your University Campus</Typography>

                    <FormControl sx={{ m: 1, width: '500px', height: 69 }} variant="outlined" >
                        <OutlinedInput
                            sx={{ border: 'solid red 3px ', borderRadius: 40, px: 4 }}
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

                </Stack>

                <img src={commerce} />


                <Stack>
                    {/* {resultsSearch.map((item, index) => (
                        <Box key={index}>
                            <Typography>{item.title}</Typography>
                        </Box>
                    ))} */}
                    <List>
                        {resultsSearch.map((item, index) => (
                            <ListItem key={index} sx={{ border: 'solid black 1px', mx: 1, display: 'flex', flexDirection: 'column' }}>
                                <Typography>{item.title}</Typography>
                                <Typography>{item.category}</Typography>
                                {/* <ListItemText primary={product.name} secondary={product.category} /> */}
                            </ListItem>
                        ))}
                    </List>
                </Stack>
            </Stack>
        </ThemeProvider>
    )
}