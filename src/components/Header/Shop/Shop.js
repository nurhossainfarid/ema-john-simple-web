import React, { useEffect, useState } from 'react';
import Product from '../../Products/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-contain'>
            <div className="shop-product">
                {
                    products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="shop-cart">
                <h2>Order Summery</h2>
                <p>Selected Item: {cart.length}</p>
                <p>Total price: {cart.price}</p>
            </div>
        </div>
    );
};

export default Shop;