import React from "react";


// import Razorpay from 'razorpay';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";


const url = 'http://localhost:5000';

const ProductView = () => {

    const location = useLocation();
    const [productsData, setproductsData] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const productId = (location.pathname).split('/')[2];
    useEffect(() => {
        fetchProduct(location.pathname)
    }, [location.pathname]);

    async function fetchProduct(path)
    {
        try {
            const response = await fetch(url+path, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "authorization":localStorage.getItem("Token")
                }
            });
            const data = await response.json();
            setproductsData(data);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }
    async function addToCart(productid,quantity)
    {
        try {
            const response = await fetch(url+'/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization':localStorage.getItem('Token')
                },
                body: JSON.stringify({ productid:productId, quantity:quantity })
            });
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    }

    async function makepayment(){
        const stripe = await loadStripe('pk_test_51Ofd8ZSHG3VMe4sjoy4D7uCVc8kA2siSW0OonJQeJxREYyzVPUVQX0DNCNhG61iOp0bR0YobYTBkRiYp9oR3y5OO00MAUc0vGi');

        const headers = {
            'Content-Type' : 'application/json'
        }
        const  response = await fetch(url+'/create-checkout-session',{
            method:'POST',
            headers:{
                'Content-Type':'application'
            },
            body:JSON.stringify(productsData)
        })

        const session = await response.json();
        const result = stripe.redirectToCheckout({
            sessionId:session.id
        })
        if((await result).error)
        {
            console.log((await result).error);
        }
    }


    // async function makepayment() {
    //     const razorpay = new Razorpay({
    //       key: 'rzp_test_YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay key ID
    //       secret: 'YOUR_RAZORPAY_KEY_SECRET', // Replace with your Razorpay key secret
    //     });
      
    //     const options = {
    //       amount: productsData.amount * 100, // Convert amount to paise
    //       currency: productsData.currency || 'INR', // Set currency (default to INR)
    //       description: productsData.description,
    //       order_id: 'order_id_' + Math.random().toString(36).substring(2, 15), // Generate unique order ID
    //     };
      
    //     try {
    //       const response = await razorpay.orders.create(options);
      
    //       const { data: { id: order_id, razorpay_payment_id } } = response; // Extract order ID and payment ID
      
    //       const paymentOptions = {
    //         "key": "rzp_test_YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay key ID
    //         "amount": options.amount,
    //         "currency": options.currency,
    //         "name": "Your Company Name", // Replace with your company name
    //         "description": options.description,
    //         "order_id": order_id, // Use the generated order ID
    //         "handler": function (response) {
    //           if (response.razorpay_payment_id) {
    //             // Handle successful payment
    //             console.log('Payment successful:', response.razorpay_payment_id);
      
    //             // Send payment confirmation to your server (replace with your logic)
    //             // fetch(url + '/payment-confirmation', {
    //             //   method: 'POST',
    //             //   body: JSON.stringify({ paymentId: response.razorpay_payment_id }),
    //             // })
    //             //   .then(response => console.log('Payment confirmation sent'))
    //             //   .catch(error => console.error(error));
      
    //           } else if (response.error) {
    //             // Handle payment failure
    //             console.error('Payment failed:', response.error);
    //           }
    //         },
    //       };
      
    //       const rzp = new window.Razorpay(paymentOptions);
    //       rzp.open();
    //     } catch (error) {
    //       console.error('Error creating Razorpay order:', error);
    //     }
    //   }
      

    return (
        <div className="container-fluid py-5">
            <div className="row px-xl-5">
                <div className="col-lg-5 pb-5">
                    <div id="product-carousel" className="carousel slide pointer-event" data-ride="carousel">
                        <div className="carousel-inner border">
                            <div className="carousel-item">
                                <img className="w-100 h-100" src={productsData.imageUrl} alt="Image" />
                            </div>
                            <div className="carousel-item active">
                                <img className="w-100 h-100" src={productsData.imageUrl}  alt="Image" />
                            </div>
                            <div className="carousel-item">
                                <img className="w-100 h-100" src={productsData.imageUrl}  alt="Image" />
                            </div>
                            <div className="carousel-item">
                                <img className="w-100 h-100" src={productsData.imageUrl}  alt="Image" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                            <i className="fa fa-2x fa-angle-left text-dark"></i>
                        </a>
                        <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                            <i className="fa fa-2x fa-angle-right text-dark"></i>
                        </a>
                    </div>
                </div>

                <div className="col-lg-7 pb-5">
                    <h3 className="font-weight-semi-bold">{productsData.name}</h3>
                    <div className="d-flex mb-3">
                        <div className="text-primary mr-2">
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star-half-alt"></small>
                            <small className="far fa-star"></small>
                        </div>
                        <small className="pt-1">(50 Reviews)</small>
                    </div>
                    <h3 className="font-weight-semi-bold mb-4">RS {productsData.price}</h3>
                    <p className="mb-4">{productsData.description}</p>
                    <div className="d-flex mb-3">
                        <p className="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
                        <form>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="size-1" name="size" />
                                <label className="custom-control-label" htmlFor="size-1">XS</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="size-2" name="size" />
                                <label className="custom-control-label" htmlFor="size-2">S</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="size-3" name="size" />
                                <label className="custom-control-label" htmlFor="size-3">M</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="size-4" name="size" />
                                <label className="custom-control-label" htmlFor="size-4">L</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="size-5" name="size" />
                                <label className="custom-control-label" htmlFor="size-5">XL</label>
                            </div>
                        </form>
                    </div>
                    <div className="d-flex mb-4">
                        <p className="text-dark font-weight-medium mb-0 mr-3">Colors:</p>
                        <form>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="color-1" name="color" />
                                <label className="custom-control-label" htmlFor="color-1">Black</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="color-2" name="color" />
                                <label className="custom-control-label" htmlFor="color-2">White</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="color-3" name="color" />
                                <label className="custom-control-label" htmlFor="color-3">Red</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="color-4" name="color" />
                                <label className="custom-control-label" htmlFor="color-4">Blue</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="color-5" name="color" />
                                <label className="custom-control-label" htmlFor="color-5">Green</label>
                            </div>
                        </form>
                    </div>
                    {/* <div className="d-flex align-items-center mb-4 pt-2">
                        <div className="input-group quantity mr-3" style={{ width: "130px" }}>
                            <div className="input-group-btn">
                                <button className="btn btn-primary btn-minus">
                                    <i className="fa fa-minus"></i>
                                </button>
                            </div>
                            <input type="text" className="form-control bg-secondary text-center" value="1" />
                            <div className="input-group-btn">
                                <button className="btn btn-primary btn-plus">
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <button className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1"></i> Add To Cart</button>
                    </div> */}
                    <div className="d-flex align-items-center mb-4 pt-2">
                        <div className="input-group quantity mr-3" style={{ width: "130px" }}>
                            <div className="input-group-btn">
                                <button className="btn btn-primary btn-minus" onClick={() => addToCart(productId, quantity - 1)}>
                                    <i className="fa fa-minus"></i>
                                </button>
                            </div>
                            <input type="text" className="form-control bg-secondary text-center" value="1" />
                            <div className="input-group-btn">
                                <button className="btn btn-primary btn-plus" onClick={() => addToCart(productId, quantity + 1)}>
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <button className="btn btn-primary px-3" onClick={() => addToCart(productId, quantity)}>
                            <i className="fa fa-shopping-cart mr-1"></i> Add To Cart
                        </button>
                    </div>
                    <div className="d-flex pt-2">
                        <p className="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
                        <div className="d-inline-flex">
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-pinterest"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row px-xl-5">
                <div className="col">
                    <div className="nav nav-tabs justify-content-center border-secondary mb-4">
                        <a className="nav-item nav-link active" data-toggle="tab" href="#tab-pane-1">Description</a>
                        <a className="nav-item nav-link" data-toggle="tab" href="#tab-pane-2">Information</a>
                        <a className="nav-item nav-link" data-toggle="tab" href="#tab-pane-3">Reviews (0)</a>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="tab-pane-1">
                            <h4 className="mb-3">Product Description</h4>
                            <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                            <p>Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</p>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-2">
                            <h4 className="mb-3">Additional Information</h4>
                            <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item px-0">
                                            Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item px-0">
                                            Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="mb-4">1 review for "Colorful Stylish Shirt"</h4>
                                    <div className="media mb-4">
                                        <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{ width: "45px" }} />
                                        <div className="media-body">
                                            <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
                                            <div className="text-primary mb-2">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                            <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h4 className="mb-4">Leave a review</h4>
                                    <small>Your email address will not be published. Required fields are marked *</small>
                                    <div className="d-flex my-3">
                                        <p className="mb-0 mr-2">Your Rating * :</p>
                                        <div className="text-primary">
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    </div>
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="message">Your Review *</label>
                                            <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">Your Name *</label>
                                            <input type="text" className="form-control" id="name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Your Email *</label>
                                            <input type="email" className="form-control" id="email" />
                                        </div>
                                        <div className="form-group mb-0">
                                            <input type="submit" value="Leave Your Review" className="btn btn-primary px-3" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductView;
