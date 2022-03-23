import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="" />
                <div>
                    <a href="/shop" className="header-link">Shop</a>         
                    <a href="/order" className="header-link">Order</a>
                    <a href="/inventor" className="header-link">Inventor</a>
                    <a href="/about" className="header-link">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;