import React from 'react';
import './Cart.css'

const Cart = props => {
    const { name, price, ratings, seller, img } = props.products;
    const { handleAddedCart } = props;
    return (
        <div className='product-info'>
            <div className='info-section'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h4>Price : {price}</h4>
                <p>Manufacture : {seller}</p>
                <p>Rating : {ratings}</p>
            </div>
            <button className='button' onClick={() =>  handleAddedCart(props.products)}>Add Cart</button>
            </div>
    );
};

export default Cart;