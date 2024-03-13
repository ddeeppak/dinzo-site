import React from "react";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Assuming you're using React Router


const CategoryDropdown = () => {
    const location = useLocation();
    const [isHomeRoute, setIsHomeRoute] = useState(false);

    useEffect(() => {
        setIsHomeRoute(location.pathname === '/');
    }, [location.pathname]);
    if(isHomeRoute)
    {
        return(
                <div className="col-lg-3 d-none d-lg-block">
                    <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" style={{ height: '65px', marginTop: '-1px', padding: '0 30px' }}>
                        <h6 className="m-0">Categories</h6>
                        <i className="fa fa-angle-down text-dark"></i>
                    </a>
                    <nav className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
                        <div className="navbar-nav w-100 overflow-hidden" style={{ height: '410px' }} >
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link" data-toggle="dropdown">Dresses <i className="fa fa-angle-down float-right mt-1"></i></a>
                                <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                    <a href="/product/category/men" className="dropdown-item" >Men's Dresses</a>
                                    <a href="/product/category/women" className="dropdown-item">Women's Dresses</a>
                                    <a href="/product/category/baby" className="dropdown-item">Baby's Dresses</a>
                                </div>
                            </div>
                            <a href="/product/category/shirts" className="nav-item nav-link">Shirts</a>
                            <a href="/product/category/Jeans" className="nav-item nav-link">Jeans</a>
                            <a href="/product/category/Swimwear" className="nav-item nav-link">Swimwear</a>
                            <a href="/product/category/Sleepwear" className="nav-item nav-link">Sleepwear</a>
                            <a href="/product/category/Sportwear" className="nav-item nav-link">Sportswear</a>
                            <a href="/product/category/Jumpsuits" className="nav-item nav-link">Jumpsuits</a>
                            <a href="/product/category/Blazers" className="nav-item nav-link">Blazers</a>
                            <a href="/product/category/Jackets" className="nav-item nav-link">Jackets</a>
                            <a href="/product/category/Shoes" className="nav-item nav-link">Shoes</a>
                        </div>
                    </nav>
                </div>
        )
    }

    return (
        <div className="col-lg-3 d-none d-lg-block">
            <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100 collapsed" data-toggle="collapse" href="#navbar-vertical" style={{ height: '65px', marginTop: '-1px', padding: '0 30px' }} aria-expanded="false">
                <h6 className="m-0">Categories</h6>
                <i className="fa fa-angle-down text-dark"></i>
            </a>
            <nav className="position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light collapse" id="navbar-vertical" style={{ width: 'calc(100% - 30px)', zIndex: '1' }}>
                <div className="navbar-nav w-100 overflow-hidden" style={{ height: '410px' }}>
                    <div className="nav-item dropdown" style={{backgroundColor:"white"}}>
                        <a href="#" className="nav-link" data-toggle="dropdown">Dresses <i className="fa fa-angle-down float-right mt-1"></i></a>
                        <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                            <a href="/product/category/men" className="dropdown-item">Men's Dresses</a>
                            <a href="/product/category/women" className="dropdown-item">Women's Dresses</a>
                            <a href="/product/category/baby" className="dropdown-item">Baby's Dresses</a>
                        </div>
                    </div>
                    <a href="/product/category/shirts" className="nav-item nav-link" style={{backgroundColor:"white"}}>Shirts</a>
                    <a href="/product/category/Jeans" className="nav-item nav-link" style={{backgroundColor:"white"}}>Jeans</a>
                    <a href="/product/category/swimwear" className="nav-item nav-link" style={{backgroundColor:"white"}}>Swimwear</a>
                    <a href="/product/category/Sleepwear" className="nav-item nav-link" style={{backgroundColor:"white"}}>Sleepwear</a>
                    <a href="/product/category/Sportwear" className="nav-item nav-link"style={{backgroundColor:"white"}}>Sportswear</a>
                    <a href="/product/category/Jumpsuits" className="nav-item nav-link" style={{backgroundColor:"white"}}>Jumpsuits</a>
                    <a href="/product/category/Blazers" style={{backgroundColor:"white"}}>Blazers</a>
                    <a href="/product/category/Jackets" className="nav-item nav-link" style={{backgroundColor:"white"}}>Jackets</a>
                    <a href="/product/category/Shoes" className="nav-item nav-link"style={{backgroundColor:"white"}}>Shoes</a>
                </div>
            </nav>
        </div>
    );
}


export default CategoryDropdown