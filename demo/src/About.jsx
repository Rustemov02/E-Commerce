import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { LocalPhoneOutlined, ChatBubbleOutlineOutlined, LocationOnOutlined } from '@mui/icons-material/';
import { useSelector } from "react-redux";

export default function About() {

    const mode = useSelector(state => state.product.mode)
    
    const box = [
        {
            title: '+994 55 778 3324',
            icon: <LocalPhoneOutlined />
        },
        {
            title: 'bunyamin2002@mail.ru',
            icon: <ChatBubbleOutlineOutlined />
        },
        {
            title: 'Azerbaijan , Baku',
            icon: <LocationOnOutlined />
        }
    ]

    return (
        <Stack direction='row' justifyContent='space-around' bgcolor= {mode ? "black" : '#EAF6FF'} px={3} paddingTop={7} paddingBottom={11}>
            <Stack width='50%' spacing={3}>
                <Typography fontSize={48} fontWeight={400} fontFamily='Inter'>Online-Shop</Typography>
                <Typography sx={{ width: '610px', color: '#504A41' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit malesuada dapibus ut pulvinar neque arcu, commodo. Pharetra nisi egestas nisi fermentum. Sollicitudin egestas senectus pellentesque enim mauris vel odio commodo. Pellentesque orci vestibulum sed in molestie consequat. </Typography>
            </Stack>

            <Stack direction='column' justifyContent='space-around' spacing={3}>
                <Typography fontSize={25}>Contact Us </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {box.map((item, index) => (
                        <Box key={index} sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                            {item.icon}
                            <Typography fontSize={18} fontFamily='Montserrat'>{item.title}</Typography>
                        </Box>
                    ))}
                </Box>

            </Stack>

            <Stack direction='column'  spacing={3}>
                <Typography fontSize={25}>About Us </Typography>
                <Stack spacing={1} >
                    <Typography fontSize={20} fontFamily='Montserrat'>Support</Typography>
                    <Typography fontSize={20} fontFamily='Montserrat'>Pricacy & Policy</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}