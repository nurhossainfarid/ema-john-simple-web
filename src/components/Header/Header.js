import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='header-container'>
                <img src={logo} alt="" />
                <div className='header-item'>
                    <Link to="/home">Home</Link>
                    <Link to="/product-order">Product Order</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>
                    <Link to={'/login'}>Login</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;