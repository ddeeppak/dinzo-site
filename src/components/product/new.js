import React, { useEffect, useState } from "react";

const url = 'https://dinzo-api.onrender.com';

const NewProducts = () => {
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTrendingProducts();
    }, []);

    async function fetchTrendingProducts() {
        try {
            console.log("call started")
            const response = await fetch(url+'/newproducts', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProductsData(data);
            setLoading(false);
            console.log(data);
        } catch (error) {
            console.error(error);
            setError('Error fetching data');
            setLoading(false);
        }
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container-fluid pt-5">
            <div className="text-center mb-4">
                <h2 className="section-title px-5"><span className="px-2">New Arrivals</span></h2>
            </div>
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
                                    <a href="javascript:void(0)" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                                    <a href="javascript:void(0)" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
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

export default NewProducts;
