import React from "react";
import { Button } from "@mui/material";
import { Link, Route, Router, Routes } from "react-router-dom";
import Details from "./Details";

export default function Contact(){
 

    return(
        <>
          <Button><Link to="/">Get Menu</Link></Button>
      Contact page will be ready for you bro ! : )
        <hr/> 
 
        <Link to={`/contact/2`}>Instagram</Link>
        <Link to={`/contact/2`}>Facebook</Link>
        </>
    )
}