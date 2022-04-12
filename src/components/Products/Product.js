import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../customHooks/useCart';
import useProducts from '../../customHooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Order from '../Order/Order';
import './Product.css'

const Product = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);


    // handle added cart
    const handleAddToCart = (selectedProduct) =>{
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    return (
        <div className='cart'>
            <div className='cart-info'>
                {
                    products.map(product => <Cart products={product} handleAddedCart = {handleAddToCart} key={product.id}></Cart>)
                }

            </div>
            <div className='cart-update'>
                <Order cart={cart}>
                    <Link to={'/product-order'}>
                        <button>Review Orders</button>
                    </Link>
                </Order>
            </div>
        </div>
    );
};

export default Product;