import React from 'react';
import './Order.css'

const Order = ({ cart , children}) => {
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity ;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = (totalPrice * 0.1).toFixed(2);
    const grandTotal = parseFloat(totalPrice) + parseFloat(totalShipping) + parseFloat(tax);
    return (
        <div className='order-summary'>
            <h2>Order Summary</h2>
            <p>Selected Item : {quantity} </p>
            <p>Total Price : {totalPrice} </p>
            <p>Total Shipping : {totalShipping} </p>
            <p>Tax : {tax} </p>
            <p>Grand Price : {grandTotal} </p>
            {children}
        </div>
    );
};

export default Order;