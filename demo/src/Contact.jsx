import React from "react";
import { Button, Paper, Stack, Typography, Box, ThemeProvider, createTheme, TextField, CssBaseline } from "@mui/material";
import { LocalPhoneOutlined, EmailOutlined, LocationOn, Instagram, Twitter, LinkedIn } from '@mui/icons-material/';
import { useSelector } from "react-redux";

export default function Contact() {

    const mode = useSelector(state => state.product.mode)
    const theme = createTheme({
        palette: {
            mode: mode ? 'dark' : 'light',
            typography: {
                fontFamily: 'Poppins',
            },
            customIcons: {
                color: 'white',
                transition: '0.3s',
                cursor: 'pointer',
                '&:hover': {
                    color: 'gray'
                }
            },
            inputStyle: {
                width: '45%',
                minWidth: '50px',
                '@media (max-width:500px)': {
                    width: '100%',
                }
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Stack py={5} >

                <Stack alignItems='center'>
                    <Typography fontSize={40} fontWeight={600}>Contact Us </Typography>
                    <Typography fontSize={18} fontWeight={500} px={4} textAlign='center' color='#717171'>Any question or remarks? Just write us a message!</Typography>
                </Stack>

                <Paper elevation={5} sx={{
                    width: '80%',
                    minWidth: 'fit-content',
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    my: 4,
                    p: 1,
                    '@media (max-width:960px)': {
                        flexDirection: 'column',
                        width: '100%',
                        minWidth: 'auto'
                    }
                }}>

                    {/* MESSAGE */}
                    <Stack py={4} px={3} width='60%' sx={{
                        '@media (max-width:960px)': {
                            width: '80%'
                        }
                    }}>
                        <Box sx={{
                            display: 'flex', flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', gap: 4, flexWrap: "wrap", width: "600px",
                            '@media (max-width:960px)': {
                                width: '100%',
                            }
                        }} >

                            <TextField
                                sx={theme.palette.inputStyle}
                                label="First Name"
                                type="text"
                                variant="standard"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                sx={theme.palette.inputStyle}
                                label="Last Name"
                                type="text"
                                variant="standard"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            <TextField
                                sx={theme.palette.inputStyle}
                                label="Email"
                                type="text"
                                variant="standard"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            <TextField
                                sx={theme.palette.inputStyle}
                                label="Phone Number"
                                type="text"
                                variant="standard"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Box>

                        <Box sx={{
                            width: 600, display: "flex", flexDirection: 'column', alignItems: 'flex-end', gap: 3, py: 5, '@media (max-width:960px)': {
                                width: '100%',
                            }
                        }}>
                            <TextField
                                sx={{ width: '100%' }}
                                id="standard-number"
                                label="Message"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="standard"
                                placeholder="Write your message..."
                            />
                            <Button variant="contained" style={{ backgroundColor: 'black', color: '#ffffff', width: 214, fontSize: 16 }}>Send Message</Button>
                        </Box>
                    </Stack>

                    {/* CONTACT  */}
                    <Stack sx={{
                        '@media (max-width:960px)': {
                            width: '80%',
                            minWidth: ' 50px',
                        },
                        '@media (max-width:500px)': {
                            width: '100%'
                        }
                    }} bgcolor='#000000' width='35%' height='auto' minHeight={450} direction='column' justifyContent='space-around' spacing={6} py={4} px={5} my={1} borderRadius={3}>

                        <Box>
                            <Typography color='#ffffff' fontSize={34} >Contact Information</Typography>
                            <Typography color='#C9C9C9'>Say something to start a live chat!</Typography>
                        </Box>

                        <Stack minWidth={220}>
                            <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
                                <LocalPhoneOutlined style={{ color: "white" }} />
                                <Typography color='#ffffff'>+994 55 778 3324</Typography>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
                                <EmailOutlined style={{ color: "white" }} />
                                <Typography color='#ffffff'>bunyamin2002@mail.ru</Typography>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
                                <LocationOn style={{ color: "white" }} />
                                <Typography color='#ffffff'>Baku , Azerbaijan</Typography>
                            </Box>
                        </Stack>

                        <Stack direction='row' spacing={2}>
                            <Instagram sx={theme.palette.customIcons} />
                            <Twitter sx={theme.palette.customIcons} />
                            <LinkedIn sx={theme.palette.customIcons} />
                        </Stack>

                    </Stack> 
                </Paper>
            </Stack>
        </ThemeProvider>
    )
}