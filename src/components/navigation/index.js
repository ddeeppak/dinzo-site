import React from 'react';
import img1 from '../../images/home/Banner/carousel-1.jpg'
import img2 from '../../images/home/Banner/carousel-2.jpg'
import { Link } from 'react-router-dom';
import Poster from '../poster';
import Category from '../category';

const Navigation = () => {
    const token = localStorage.getItem("Token");

    const search = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        const searchInput = document.getElementById('searchinput').value;
        // Redirect to the search page with the search query
        window.location.href = `/search/${searchInput}`;
    }

    return (
        <>
            <div className="row align-items-center py-3 px-xl-5">
                <div className="col-lg-3 d-none d-lg-block">
                    <Link to="/" className="text-decoration-none">
                        <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">D</span>DINZO</h1>
                    </Link>
                </div>
                <div className="col-lg-6 col-6 text-left">
                    <form onSubmit={search}>
                        <div className="input-group">
                            <input id='searchinput' type="text" className="form-control" placeholder="Search for products" />
                            <div className="input-group-append">
                                <span className="input-group-text bg-transparent text-primary">
                                    <i className="fa fa-search"></i>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-3 col-6 text-right">
                    <Link to="/" className="btn border">
                        <i className="fas fa-heart text-primary"></i>
                        <span className="badge">0</span>
                    </Link>
                    <Link to="/cart" className="btn border">
                        <i className="fas fa-shopping-cart text-primary"></i>
                        <span className="badge">{localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).totalquantity : 0}</span>
                    </Link>
                </div>
            </div>
            <div className="container-fluid mb-5">
                <div className="row border-top px-xl-5">
                    <Category />
                    <Home token={token} />
                </div>
            </div>
        </>
    );
}

const Home = ({ token }) => {
    return (
        <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                <Link to="/" className="text-decoration-none d-block d-lg-none">
                    <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">D</span>DINZO</h1>
                </Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav mr-auto py-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/search" className="nav-item nav-link">Shop</Link>
                        <Link to="/product" className="nav-item nav-link">Shop Detail</Link>
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</Link>
                            <div className="dropdown-menu rounded-0 m-0">
                                <Link to="/cart" className="dropdown-item">Shopping Cart</Link>
                                <Link to="/checkout" className="dropdown-item">Checkout</Link>
                            </div>
                        </div>
                        <Link to="/contact" className="nav-item nav-link">Contact</Link>
                    </div>
                    {!token && (
                        <div className="navbar-nav ml-auto py-0">
                            <Link to="/login" className="nav-item nav-link">Login</Link>
                            <Link to="/signup" className="nav-item nav-link">Register</Link>
                        </div>
                    )}
                </div>
            </nav>
            <Poster />
        </div>
    );
}

export default Navigation;
