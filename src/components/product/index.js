import React, { useEffect, useState } from "react";
import img1 from '../../images/product/product1.png'

const url = 'https://dinzo-api.onrender.com' ;

const Products = () => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        fetchTrendingProducts();
    }, []);

    async function fetchTrendingProducts() {
        try {
            console.log("call started")
            const response = await fetch(url+'/trendingproducts', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            setProductsData(data);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }
    
    return (
        <div className="container-fluid pt-5">
            <div className="text-center mb-4">
                <h2 className="section-title px-5"><span className="px-2">Trendy Products</span></h2>
            </div>
            {/* <div className="row px-xl-5 pb-3">
                {products.map(product => (
                    <div key={product.id} className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="card product-item border-0 mb-4">
                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img className="img-fluid w-100" src={product.image} alt="" />
                            </div>
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className="text-truncate mb-3">{product.name}</h6>
                                <div className="d-flex justify-content-center">
                                    <h6>Rs {product.price}</h6>
                                    <h6 className="text-muted ml-2"><del>Rs {product.discountedPrice}</del></h6>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
                                <a href="#" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                                <a href="#" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div> */}
            <div className="row px-xl-5 pb-3">
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
        </div>
    );
}

export default Products;
