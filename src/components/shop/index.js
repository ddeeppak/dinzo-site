import React from "react";
import '../../stylesheets/style.css';


import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


const url = 'http://localhost:5000'

const Shop = () => {

    const location = useLocation();
    const [productsData, setproductsData] = useState([]);

    useEffect(() => {
        fetchCategoryProducts(location.pathname)
    }, [location.pathname]);

    async function fetchCategoryProducts(path) {
        try {
            const response = await fetch(url+path, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            setproductsData(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="container-fluid pt-5">
            <div className="row px-xl-5">
                <div className="col-lg-3 col-md-12">
                    <div className="border-bottom mb-4 pb-4">
                        <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>
                        <form>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" checked="" id="price-all"/>
                                    <label className="custom-control-label" for="price-all">All Price</label>
                                    <span className="badge border font-weight-normal">1000</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="price-1"/>
                                    <label className="custom-control-label" for="price-1">RS 500 - RS 1000</label>
                                    <span className="badge border font-weight-normal">150</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="price-2"/>
                                    <label className="custom-control-label" for="price-2">RS 1000 - RS 2000</label>
                                    <span className="badge border font-weight-normal">295</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="price-3"/>
                                    <label className="custom-control-label" for="price-3">RS 2000 - RS 3000</label>
                                    <span className="badge border font-weight-normal">246</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="price-4"/>
                                    <label className="custom-control-label" for="price-4">RS 3000 - RS 4000</label>
                                    <span className="badge border font-weight-normal">145</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                    <input type="checkbox" className="custom-control-input" id="price-5"/>
                                    <label className="custom-control-label" for="price-5">RS 4000 - RS 5000</label>
                                    <span className="badge border font-weight-normal">168</span>
                                </div>
                            </form>
                    </div>
                    <div className="border-bottom mb-4 pb-4">
                        <h5 className="font-weight-semi-bold mb-4">Filter by color</h5>
                        <form>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" checked="" id="color-all"/>
                                    <label className="custom-control-label" for="price-all">All Color</label>
                                    <span className="badge border font-weight-normal">1000</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="color-1"/>
                                    <label className="custom-control-label" for="color-1">Black</label>
                                    <span className="badge border font-weight-normal">150</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="color-2"/>
                                    <label className="custom-control-label" for="color-2">White</label>
                                    <span className="badge border font-weight-normal">295</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="color-3"/>
                                    <label className="custom-control-label" for="color-3">Red</label>
                                    <span className="badge border font-weight-normal">246</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="color-4"/>
                                    <label className="custom-control-label" for="color-4">Blue</label>
                                    <span className="badge border font-weight-normal">145</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                    <input type="checkbox" className="custom-control-input" id="color-5"/>
                                    <label className="custom-control-label" for="color-5">Green</label>
                                    <span className="badge border font-weight-normal">168</span>
                                </div>
                            </form>
                    </div>
                    <div className="mb-5">
                        <h5 className="font-weight-semi-bold mb-4">Filter by size</h5>
                        <form>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" checked="" id="size-all"/>
                                    <label className="custom-control-label" for="size-all">All Size</label>
                                    <span className="badge border font-weight-normal">1000</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="size-1"/>
                                    <label className="custom-control-label" for="size-1">XS</label>
                                    <span className="badge border font-weight-normal">150</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="size-2"/>
                                    <label className="custom-control-label" for="size-2">S</label>
                                    <span className="badge border font-weight-normal">295</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="size-3"/>
                                    <label className="custom-control-label" for="size-3">M</label>
                                    <span className="badge border font-weight-normal">246</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="size-4"/>
                                    <label className="custom-control-label" for="size-4">L</label>
                                    <span className="badge border font-weight-normal">145</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                    <input type="checkbox" className="custom-control-input" id="size-5"/>
                                    <label className="custom-control-label" for="size-5">XL</label>
                                    <span className="badge border font-weight-normal">168</span>
                                </div>
                            </form>
                    </div>
                </div>
                <div className="col-lg-9 col-md-12">
                    {/* <div className="row pb-3">
                        {productsData.length > 0 ? (
                            productsData.map((product, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-12 pb-1" key={index}>
                                    <div className="card product-item border-0 mb-4">
                                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                        <img
                                            className="img-fluid w-100"
                                            src={`data:image/png;base64,${product.imageUrl}`}
                                            alt={`Product ${index + 1}`}
                                            onError={(event) => {
                                            event.target.src = 'https://via.placeholder.com/150'; // Replace with default image URL
                                            console.error('Error loading image:', product.imageUrl);
                                            }}
                                        />
                                        </div>
                                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                            <h6 className="text-truncate mb-3">{product.name}</h6>
                                            <div className="d-flex justify-content-center">
                                                <h6>{product.price}</h6>
                                                <h6 className="text-muted ml-2"><del>{product.discountedPrice}</del></h6>
                                            </div>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between bg-light border">
                                            <a href="#" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                                            <a href="#" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center">
                                <p>No related products found.</p>
                            </div>
                        )}
                    </div> */}
                    {/* <div className="row pb-3">
                        {productsData.length > 0 ? (
                            productsData.map((product, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-12 pb-1" key={index}>
                                    <div className="card product-item border-0 mb-4">
                                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0" style={{ height: "200px" }}>
                                            {product.imageUrl ? (
                                                <img className="img-fluid w-100 h-100" src={product.imageUrl} alt={`Product ${index + 1}`} />
                                            ) : (
                                                <div className="text-center d-flex align-items-center justify-content-center" style={{ height: "100%" }}>No Image Available</div>
                                            )}
                                        </div>
                                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                            <h6 className="text-truncate mb-3">{product.name}</h6>
                                            <div className="d-flex justify-content-center">
                                                <h6>{product.price}</h6>
                                                <h6 className="text-muted ml-2"><del>{product.discountedPrice}</del></h6>
                                            </div>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between bg-light border">
                                            <a href="#" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                                            <a href="#" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center">
                                <p>No related products found.</p>
                            </div>
                        )}
                    </div> */}
                    <div className="row pb-3">
                        {productsData.length > 0 ? (
                            productsData.map((product, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-12 pb-1" key={index} onClick={()=>window.location.href='/product/'+product._id}>
                                    <div className="card product-item border-0 mb-4">
                                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0" style={{ height: "250px" }}>
                                            {product.imageUrl ? (
                                                <div className="img-fluid w-100 h-100" style={{ backgroundImage: `url(${product.imageUrl})`, backgroundSize: 'cover' }}></div>
                                            ) : (
                                                <div className="text-center d-flex align-items-center justify-content-center" style={{ height: "100%" }}>No Image Available</div>
                                            )}
                                        </div>
                                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                            <h6 className="text-truncate mb-3">{product.name}</h6>
                                            <div className="d-flex justify-content-center">
                                                <h6>{product.price}</h6>
                                                <h6 className="text-muted ml-2"><del>{product.discountedPrice}</del></h6>
                                            </div>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between bg-light border">
                                            <a href="#" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                                            <a href="#" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center">
                                <p>No related products found.</p>
                            </div>
                        )}
                    </div>


                    <div className="col-12 pb-1">
                        <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-center mb-3">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">«</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">»</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;
