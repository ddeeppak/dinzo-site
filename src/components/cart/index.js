import React from 'react';


import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";

// const items =[];

function Cart() {

    const [Cart, setCart] = useState([]);
    const [items,setItems] = useState([]);

    useEffect(() => {
        fetchCart();
    }, []);

    async function fetchCart() {
        try {
            console.log("call started")
            const response = await fetch('http://localhost:5000/cart', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "authorization":localStorage.getItem("Token")
                }
            });
            const data = await response.json();
            setCart(data); // Assuming setCart updates the state with the received data
            localStorage.setItem('cart', JSON.stringify(data));
            
            setItems(await data.items);
            console.log(data);
            
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="container-fluid pt-5">
            <div className="row px-xl-5">
                <div className="col-lg-8 table-responsive mb-5">
                    <table className="table table-bordered text-center mb-0">
                        <thead className="bg-secondary text-dark">
                            <tr>
                                <th>Products</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody className="align-middle">
                         {items.map((item, index) => (
                            <tr key={index}>
                                <td className="align-middle">
                                <img src={item.image} alt={item.name} style={{ width: '50px' }} /> {item.name}
                                </td>
                                <td className="align-middle">Rs {item.price}</td>
                                <td className="align-middle">
                                <div className="input-group quantity mx-auto" style={{ width: '100px' }}>
                                    <div className="input-group-btn">
                                    <button className="btn btn-sm btn-primary btn-minus">
                                        <i className="fa fa-minus"></i>
                                    </button>
                                    </div>
                                    <input type="text" className="form-control form-control-sm bg-secondary text-center" value={item.quantity} />
                                    <div className="input-group-btn">
                                    <button className="btn btn-sm btn-primary btn-plus">
                                        <i className="fa fa-plus"></i>
                                    </button>
                                    </div>
                                </div>
                                </td>
                                <td className="align-middle">Rs {item.total}</td>
                                <td className="align-middle"><button className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button></td>
                            </tr>
                            ))}

                            {/* Repeat similar structure for other items */}
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-4">
                <form className="mb-5" action="">
                    <div className="input-group">
                        <input type="text" class="form-control p-4" placeholder="Coupon Code" />
                        <div className="input-group-append">
                            <button className="btn btn-primary">Apply Coupon</button>
                        </div>
                    </div>
                </form>
                <div className="card border-secondary mb-5">
                    <div className="card-header bg-secondary border-0">
                        <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
                    </div>
                    <div className="card-body">
                        <div className="d-flex justify-content-between mb-3 pt-1">
                            <h6 className="font-weight-medium">Subtotal</h6>
                            <h6 className="font-weight-medium">Rs {Cart.totalAmount}</h6>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-medium">Shipping</h6>
                            <h6 className="font-weight-medium">Rs 50</h6>
                        </div>
                    </div>
                    <div className="card-footer border-secondary bg-transparent">
                        <div className="d-flex justify-content-between mt-2">
                            <h5 className="font-weight-bold">Total</h5>
                            <h5 className="font-weight-bold">Rs {Cart.totalAmount+50}</h5>
                        </div>
                        <button className="btn btn-block btn-primary my-3 py-3">Proceed To Checkout</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Cart;
