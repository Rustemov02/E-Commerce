import React from 'react'
import { Route, Link, Routes } from 'react-router-dom'
import FakeHome from './FakeHome'
import Contact from './Contact' 
import Details from './Details';

export default function TestAPI() {

    const companies = [
        {
            name: "Apple",
            id: 0
        },
        {
            name: "Microsoft",
            id: 1
        }
    ];

    return (
        <>
            
            <div>
                <Link to='/'>Home</Link>
                <Link to='/contact'>Contact</Link>
            </div>


            <Routes>
                <Route path='/' element={<FakeHome />} />
                <Route path='/contact' element={<Contact />} /> 
                <Route path='/contact/:contactId' element={<Details/>}  /> 
            </Routes>
        </>
    )
} 