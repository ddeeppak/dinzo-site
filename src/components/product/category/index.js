import React from 'react';

import img1 from "../../../images/product/category/cat-1.jpg"
import img2 from "../../../images/product/category/cat-2.jpg"
import img3 from "../../../images/product/category/cat-3.jpg"
import img4 from "../../../images/product/category/cat-4.jpg"
import img5 from "../../../images/product/category/cat-5.jpg"
import img6 from "../../../images/product/category/cat-6.jpg"
import img7 from "../../../images/product/category/offer-1.png"
import img8 from "../../../images/product/category/offer-2.png"


import Products from '../index';
import NewProducts from '../new';
import { Navigate } from 'react-router-dom';



const Category = () => {

    

    return (
    <>
        <div className="container-fluid pt-5">
            <div className="row px-xl-5 pb-3">
                <div className="col-lg-4 col-md-6 pb-1" onClick={() => Navigate('/product/category/men')}>
                    <div className="cat-item d-flex flex-column border mb-4" style={{ padding: '30px' }}>
                        <p className="text-right">15 Products</p>
                        <a href="/product/category/men" className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src={img1} alt="Men's dresses" />
                        </a>
                        <h5 className="font-weight-semi-bold m-0">Men's dresses</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1" onClick={() => Navigate('/product/category/women')}>
                    <div className="cat-item d-flex flex-column border mb-4" style={{ padding: '30px' }}>
                        <p className="text-right">15 Products</p>
                        <a href="/product/category/women" className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src={img2} alt="" />
                        </a>
                        <h5 className="font-weight-semi-bold m-0">Women's dresses</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1" onClick={() => Navigate('/product/category/baby')}>
                    <div className="cat-item d-flex flex-column border mb-4" style={{ padding: '30px' }}>
                        <p className="text-right">15 Products</p>
                        <a href="/product/category/baby" className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src={img3} alt="" />
                        </a>
                        <h5 className="font-weight-semi-bold m-0">Baby's dresses</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1" onClick={() => Navigate('/product/category/Accerssories')}>
                    <div className="cat-item d-flex flex-column border mb-4" style={{ padding: '30px' }}>
                        <p className="text-right">15 Products</p>
                        <a href="/product/category/Accerssories" className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src={img4} alt="" />
                        </a>
                        <h5 className="font-weight-semi-bold m-0">Accerssories</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1" onClick={() => Navigate('/product/category/bag')}>
                    <div className="cat-item d-flex flex-column border mb-4" style={{ padding: '30px' }}>
                        <p className="text-right">15 Products</p>
                        <a href="/product/category/bag" className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src={img5} alt="" />
                        </a>
                        <h5 className="font-weight-semi-bold m-0">Bags</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1" onClick={() => Navigate('/product/category/shoes')}>
                    <div className="cat-item d-flex flex-column border mb-4" style={{ padding: '30px' }}>
                        <p className="text-right">15 Products</p>
                        <a href="/product/category/shoes" className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src={img6} alt="" />
                        </a>
                        <h5 className="font-weight-semi-bold m-0">Shoes</h5>
                    </div>
                </div>
            </div>
        </div>

        <OfferComponent />
        <Products />
        <StayUpdated />
        <NewProducts />

    </>
    );
}



const OfferComponent = () => {
    return (
        <div className="container-fluid offer pt-5">
            <div className="row px-xl-5">
                <div className="col-md-6 pb-4">
                    <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
                        <img src={img7} alt="" />
                        <div className="position-relative" style={{ zIndex: 1 }}>
                            <h5 className="text-uppercase text-primary mb-3">20% off the all order</h5>
                            <h1 className="mb-4 font-weight-semi-bold">Spring Collection</h1>
                            <a href="/product/season/spring" className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 pb-4">
                    <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
                        <img src={img8} alt="" />
                        <div className="position-relative" style={{ zIndex: 1 }}>
                            <h5 className="text-uppercase text-primary mb-3">20% off the all order</h5>
                            <h1 className="mb-4 font-weight-semi-bold">Winter Collection</h1>
                            <a href="/product/season/winter" className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


const StayUpdated = () => {
    return (
        <div className="container-fluid bg-secondary my-5">
            <div className="row justify-content-md-center py-5 px-xl-5">
                <div className="col-md-6 col-12 py-5">
                    <div className="text-center mb-2 pb-2">
                        <h2 className="section-title px-5 mb-3"><span className="bg-secondary px-2">Stay Updated</span></h2>
                        <p>Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam labore at justo ipsum eirmod duo labore labore.</p>
                    </div>
                    <form action="">
                        <div className="input-group">
                            <input type="text" className="form-control border-white p-4" placeholder="Email Goes Here" />
                            <div className="input-group-append">
                                <button className="btn btn-primary px-4">Subscribe</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}



export default Category;
