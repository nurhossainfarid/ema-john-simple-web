import React from 'react';
import './ReviewCart.css';
import { TrashIcon } from '@heroicons/react/solid'
const ReviewCart = ({ product , handleRemoveCart}) => {
    const { name, img, price, shipping, quantity } = product;
    return (
        <div className='review-container'>
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="item-details-container">
                <div className="item-details">
                    <h3 title={name}>{name.length > 15 ? name.slice(0, 15) + '...' : name}</h3>
                    <p>Price : <span className='orange-color'>${price}</span></p>
                    <p>Shipping Charge : <span className='orange-color'>${shipping}</span></p>
                    <p>Quantity : <small>{ quantity}</small></p>
                </div>
                <TrashIcon onClick={() => handleRemoveCart(product)} className='trash-icon'></TrashIcon>
            </div>
        </div>
    );
};

export default ReviewCart;