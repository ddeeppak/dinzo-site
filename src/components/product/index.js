import React from 'react';

import img1 from '../../images/product/product1.png'

const Products = () => {
    const products = [
        { id: 1, name: "Colorful Stylish Shirt", price: 1500.00, discountedPrice: 1230.00, image:img1 },
        { id: 2, name: "Elegant Casual Dress", price: 2000.00, discountedPrice: 1800.00, image: img1 },
        { id: 3, name: "Trendy Denim Jeans", price: 1800.00, discountedPrice: 1500.00, image: img1 },
        { id: 4, name: "Classic Leather Jacket", price: 3000.00, discountedPrice: 2700.00, image: img1 },
        { id: 5, name: "Stylish Sneakers", price: 2500.00, discountedPrice: 2200.00, image: img1 },
        { id: 6, name: "Formal Business Suit", price: 4000.00, discountedPrice: 3500.00, image: img1 },
        { id: 7, name: "Vintage Wristwatch", price: 1800.00, discountedPrice: 1600.00, image: img1 },
        { id: 8, name: "Chic Sunglasses", price: 1200.00, discountedPrice: 1000.00, image: img1 },
        { id: 9, name: "Designer Handbag", price: 2800.00, discountedPrice: 2500.00, image: img1 },
        { id: 10, name: "Cozy Winter Scarf", price: 800.00, discountedPrice: 600.00, image: img1 },
        { id: 11, name: "Casual Cotton T-shirt", price: 1000.00, discountedPrice: 800.00, image:img1 },
        { id: 12, name: "Sporty Fitness Leggings", price: 1500.00, discountedPrice: 1300.00, image: img1 },
        { id: 13, name: "Floral Summer Dress", price: 2200.00, discountedPrice: 2000.00, image: img1 },
        { id: 14, name: "Fashionable Fedora Hat", price: 900.00, discountedPrice: 700.00, image: img1 },
        { id: 15, name: "Trendy Smartphone Case", price: 500.00, discountedPrice: 400.00, image: img1 }
    ];

    return (
        <div className="container-fluid pt-5">
            <div className="text-center mb-4">
                <h2 className="section-title px-5"><span className="px-2">Trendy Products</span></h2>
            </div>
            <div className="row px-xl-5 pb-3">
                {/* Product Cards */}
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
            </div>
        </div>
    );
}

export default Products;
