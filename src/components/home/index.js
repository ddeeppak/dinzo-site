import React from "react";

import Support from "../support/index";
import Navigation from "../navigation/index";
import FeatureComponent from "../features";
import Services from "../services";
import Product from "../product/category/index";
import Footer from "../footer";


import '../../stylesheets/home/style.css';

const Home = () =>{
    return (
        <>
            <div className="container-fluid"> 
                <Support />
                <Navigation />
            </div>
            <FeatureComponent />
            <Services />
            <Product />
            <Footer />
        </>
    )
}

export default Home;