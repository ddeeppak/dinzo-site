import React from "react";
import Navigation from './navigation';
import Support from './support';
import Footer from './footer';
import { Outlet } from "react-router-dom";

const Landing = () =>{
    return (
        <>
            <Support />
            <Navigation/>
            <Outlet />
            <Footer />
        </>
    )
}

export default Landing;
