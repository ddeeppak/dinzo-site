import React, { useEffect, useState } from 'react';
import { loadStripe } from "@stripe/stripe-js";
const url = 'https://dinzo-api.onrender.com';
function Cart() {
    const [cart, setCart] = useState({ items: [], totalAmount: 0 });

    useEffect(() => {
        fetchCart();
    }, []);

    async function fetchCart() {
        try {
            console.log("call started");
            const response = await fetch(url+'/cart', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": localStorage.getItem("Token")
                }
            });
            const data = await response.json();
            setCart(data);
            localStorage.setItem('cart', JSON.stringify(data));
            console.log(data);

        } catch (error) {
            console.error(error);
        }
    }

    async function deleteItem(id) {
        try {
            console.log("call started");
            const response = await fetch(url+`/cart/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": localStorage.getItem("Token")
                }
            });
            if (response.ok) {
                fetchCart();
            } else {
                console.error("Failed to delete item");
            }

        } catch (error) {
            console.error(error);
        }
    }

    const groupedItems = {};
    cart.items.forEach(item => {
        if (!groupedItems[item.category]) {
            groupedItems[item.category] = [];
        }
        groupedItems[item.category].push(item);
    });

    async function makepayment() {
        const stripe = await loadStripe('pk_test_51Ofd8ZSHG3VMe4sjoy4D7uCVc8kA2siSW0OonJQeJxREYyzVPUVQX0DNCNhG61iOp0bR0YobYTBkRiYp9oR3y5OO00MAUc0vGi');
    
        const response = await fetch(url+'/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("Token") // Send token in the headers
            }
        });
    
        const session = await response.json();
        const result = stripe.redirectToCheckout({
            sessionId:session.id
        })
        if((await result).error)
        {
            console.log((await result).error);
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
                            {Object.keys(groupedItems).map(category => (
                                <React.Fragment key={category}>
                                    <tr>
                                        <td colSpan="5">
                                            <h4>{category}</h4>
                                        </td>
                                    </tr>
                                    {groupedItems[category].map((item, index) => (
                                        <tr key={index}>
                                            <td className="align-middle">
                                                <div className="truncate-text" title={item.name} style={{ maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                    <img src={item.image} alt={item.name} style={{ width: '50px', marginRight: '5px' }} />
                                                    {item.name}
                                                </div>
                                            </td>

                                            <td className="align-middle">$ {item.price}</td>
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
                                            <td className="align-middle">$ {item.price * item.quantity}</td>
                                            <td className="align-middle">
                                                <button className="btn btn-sm btn-primary" onClick={() => deleteItem(item.product)}>
                                                    <i className="fa fa-times"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-4">
                    <form className="mb-5" action="">
                        <div className="input-group">
                            <input type="text" className="form-control p-4" placeholder="Coupon Code" />
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
                                <h6 className="font-weight-medium">$ {cart.totalAmount}</h6>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-medium">Shipping</h6>
                                <h6 className="font-weight-medium">$ 2</h6>
                            </div>
                        </div>
                        <div className="card-footer border-secondary bg-transparent">
                            <div className="d-flex justify-content-between mt-2">
                                <h5 className="font-weight-bold">Total</h5>
                                <h5 className="font-weight-bold">$ {cart.totalAmount + 2}</h5>
                            </div>
                            <button className="btn btn-block btn-primary my-3 py-3" onClick={makepayment}>Proceed To Checkout</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Cart;
