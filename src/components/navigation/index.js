import React, { useEffect } from 'react';
import img1 from '../../images/home/Banner/carousel-1.jpg'
import img2 from '../../images/home/Banner/carousel-2.jpg'
import { Link,Navigate,useLocation  } from 'react-router-dom';
import Poster from '../poster';
import Category from '../category';

const Navigation = () => {

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
                <a href="/" className="text-decoration-none">
                    <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">D</span>DINZO</h1>
                </a>
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
                <a href="/" className="btn border">
                    <i className="fas fa-heart text-primary"></i>
                    <span className="badge">0</span>
                </a>
                <a href="/cart" className="btn border">
                    <i className="fas fa-shopping-cart text-primary"></i>
                    <span className="badge">{localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).totalquantity : 0}
</span>
                </a>
            </div>
        </div>
                <div className="container-fluid mb-5">
                <div className="row border-top px-xl-5">
                    <Category />
                    <Home />
                </div>
            </div>
    </>
    );
}





// const CategoryDropdown = () => {
//     return (
//         // <div className="col-lg-3 d-none d-lg-block">
//         //     <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" style={{ height: '65px', marginTop: '-1px', padding: '0 30px' }}>
//         //         <h6 className="m-0">Categories</h6>
//         //         <i className="fa fa-angle-down text-dark"></i>
//         //     </a>
//         //     <nav className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
//         //         <div className="navbar-nav w-100 overflow-hidden" style={{ height: '410px' }}>
//         //             <div className="nav-item dropdown">
//         //                 <a href="#" className="nav-link" data-toggle="dropdown">Dresses <i className="fa fa-angle-down float-right mt-1"></i></a>
//         //                 <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
//         //                     <a href="" className="dropdown-item">Men's Dresses</a>
//         //                     <a href="" className="dropdown-item">Women's Dresses</a>
//         //                     <a href="" className="dropdown-item">Baby's Dresses</a>
//         //                 </div>
//         //             </div>
//         //             <a href="" className="nav-item nav-link">Shirts</a>
//         //             <a href="" className="nav-item nav-link">Jeans</a>
//         //             <a href="" className="nav-item nav-link">Swimwear</a>
//         //             <a href="" className="nav-item nav-link">Sleepwear</a>
//         //             <a href="" className="nav-item nav-link">Sportswear</a>
//         //             <a href="" className="nav-item nav-link">Jumpsuits</a>
//         //             <a href="" className="nav-item nav-link">Blazers</a>
//         //             <a href="" className="nav-item nav-link">Jackets</a>
//         //             <a href="" className="nav-item nav-link">Shoes</a>
//         //         </div>
//         //     </nav>
//         // </div>
//         <div className="col-lg-3 d-none d-lg-block">
//             <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100 collapsed" data-toggle="collapse" href="#navbar-vertical" style={{ height: '65px', marginTop: '-1px', padding: '0px 30px' }} aria-expanded="false">
//                 <h6 className="m-0">Categories</h6>
//                 <i className="fa fa-angle-down text-dark"></i>
//             </a>
//             <nav className="navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 collapse" id="navbar-vertical" style={{}}>
//                 <div className="navbar-nav w-100 overflow-hidden" style={{ height: '410px' }}>
//                     <div className="nav-item dropdown">
//                         <a href="#" className="nav-link" data-toggle="dropdown">Dresses <i className="fa fa-angle-down float-right mt-1"></i></a>
//                         <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
//                             <a href="" className="dropdown-item">Men's Dresses</a>
//                             <a href="" className="dropdown-item">Women's Dresses</a>
//                             <a href="" className="dropdown-item">Baby's Dresses</a>
//                         </div>
//                     </div>
//                     <a href="" className="nav-item nav-link">Shirts</a>
//                     <a href="" className="nav-item nav-link">Jeans</a>
//                     <a href="" className="nav-item nav-link">Swimwear</a>
//                     <a href="" className="nav-item nav-link">Sleepwear</a>
//                     <a href="" className="nav-item nav-link">Sportswear</a>
//                     <a href="" className="nav-item nav-link">Jumpsuits</a>
//                     <a href="" className="nav-item nav-link">Blazers</a>
//                     <a href="" className="nav-item nav-link">Jackets</a>
//                     <a href="" className="nav-item nav-link">Shoes</a>
//                 </div>
//             </nav>
//         </div>
//     );
// }

const Home = () => {
    return (
        <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                <a href="/" className="text-decoration-none d-block d-lg-none">
                    <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">D</span>DINZO</h1>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav mr-auto py-0">
                        <a href="/" className="nav-item nav-link active">Home</a>
                        <a href="search" className="nav-item nav-link">Shop</a>
                        <a href="product" className="nav-item nav-link">Shop Detail</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu rounded-0 m-0">
                                <a href="cart" className="dropdown-item">Shopping Cart</a>
                                <a href="checkout" className="dropdown-item">Checkout</a>
                            </div>
                        </div>
                        <a href="contact" className="nav-item nav-link">Contact</a>
                    </div>
                    <div className="navbar-nav ml-auto py-0">
                        <Link to="/login">
                        <p className="nav-item nav-link">Login</p>
                        </Link>
                        <a href="./Signup/signup.html" className="nav-item nav-link">Register</a>
                    </div>
                </div>
            </nav>
            {/* <div id="header-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ height: '410px' }}>
                        <img className="img-fluid" src={img1} alt="Image" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: '700px' }}>
                                <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                <h3 className="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
                                <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ height: '410px' }}>
                        <img className="img-fluid" src={img2} alt="Image" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: '700px' }}>
                                <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                <h3 className="display-4 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
                                <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                    <div className="btn btn-dark" style={{ width: '45px', height: '45px' }}>
                        <span className="carousel-control-prev-icon mb-n2"></span>
                    </div>
                </a>
                <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                    <div className="btn btn-dark" style={{ width: '45px', height: '45px' }}>
                        <span className="carousel-control-next-icon mb-n2"></span>
                    </div>
                </a>
            </div> */}
            <Poster />

        </div>
    );
}

export default Navigation;
