import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Typography } from "@mui/material";


export default function Details(){
    const data = useSelector(state => state.product.selectedItem[0])
    
    return( 
        <> 
        <img style={{width : 150}} src={data.image} />
        <Typography>{data.category}</Typography>
        <Typography>{data.title}</Typography>
        <Typography>{data.rating.rate}</Typography>
        <Typography>{data.price}</Typography> 
        <Typography>{data.description}</Typography> 
        <Button>Add to Cart</Button>
        <Button>Go to Cart</Button>
        <Button onClick={()=>console.log(data)}>Check</Button>
        Details Page
        </>
    )
}