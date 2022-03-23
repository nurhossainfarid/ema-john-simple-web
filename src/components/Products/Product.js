import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css';

const Product = ({ product, handleAddToCart}) => {
// const Product = props => {
    // const { product, handleAddToCart} = props;
    const { name, seller, img, price, ratings } = product;
    return (
        <div className='product-info'>
            <img src={img} alt="" />
            <div className='product-items'>
            <h2>{name}</h2>
            <h3>Price: {price}</h3>
            <p>Manufacturer: {seller}</p>
            <p>Patting: {ratings } start</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='add-button'>Add Card <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;