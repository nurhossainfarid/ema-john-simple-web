import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../customHooks/useCart';
import useProducts from '../../customHooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Order from '../Order/Order';
import ReviewCart from '../ReviewCart/ReviewCart';

const ProductOrder = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleRemoveCart = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id)
    }
    return (
        <div className='cart'>
            <div className='review-cart-info'>
                {
                    cart.map(product => <ReviewCart
                        key={product.id}
                        product={product}
                        handleRemoveCart = {handleRemoveCart}
                    ></ReviewCart>)
                }
            </div>
            <div className='cart-update'>
                <Order cart={cart}>
                <Link to={'/shipment'}>
                        <button>Process shipping</button>
                    </Link>
                </Order>
            </div>
        </div>
    );
};

export default ProductOrder;