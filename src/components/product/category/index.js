import React from 'react';

import img1 from "../../../images/product/category/cat-1.jpg"
import img2 from "../../../images/product/category/cat-2.jpg"
import img3 from "../../../images/product/category/cat-3.jpg"
import img4 from "../../../images/product/category/cat-4.jpg"
import img5 from "../../../images/product/category/cat-5.jpg"
import img6 from "../../../images/product/category/cat-6.jpg"
import img7 from "../../../images/product/category/offer-1.png"
import img8 from "../../../images/product/category/offer-2.png"

const Category = () => {
    return (
    <>
        <div className="container-fluid pt-5">
            <div className="row px-xl-5 pb-3">
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="cat-item d-flex flex-column border mb-4" style={{ padding: '30px' }}>
                        <p className="text-right">15 Products</p>
                        <a href="" className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src={img1} alt="" />
                        </a>
                        <h5 className="font-weight-semi-bold m-0">Men's dresses</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="cat-item d-flex flex-column border mb-4" style={{ padding: '30px' }}>
                        <p className="text-right">15 Products</p>
                        <a href="" className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src={img2} alt="" />
                        </a>
                        <h5 className="font-weight-semi-bold m-0">Women's dresses</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="cat-item d-flex flex-column border mb-4" style={{ padding: '30px' }}>
                        <p className="text-right">15 Products</p>
                        <a href="" className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src={img3} alt="" />
                        </a>
                        <h5 className="font-weight-semi-bold m-0">Baby's dresses</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="cat-item d-flex flex-column border mb-4" style={{ padding: '30px' }}>
                        <p className="text-right">15 Products</p>
                        <a href="" className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src={img4} alt="" />
                        </a>
                        <h5 className="font-weight-semi-bold m-0">Accerssories</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="cat-item d-flex flex-column border mb-4" style={{ padding: '30px' }}>
                        <p className="text-right">15 Products</p>
                        <a href="" className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src={img5} alt="" />
                        </a>
                        <h5 className="font-weight-semi-bold m-0">Bags</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="cat-item d-flex flex-column border mb-4" style={{ padding: '30px' }}>
                        <p className="text-right">15 Products</p>
                        <a href="" className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src={img6} alt="" />
                        </a>
                        <h5 className="font-weight-semi-bold m-0">Shoes</h5>
                    </div>
                </div>
            </div>
        </div>

        <OfferComponent />

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
                            <a href="" className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 pb-4">
                    <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
                        <img src={img8} alt="" />
                        <div className="position-relative" style={{ zIndex: 1 }}>
                            <h5 className="text-uppercase text-primary mb-3">20% off the all order</h5>
                            <h1 className="mb-4 font-weight-semi-bold">Winter Collection</h1>
                            <a href="" className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Category;
