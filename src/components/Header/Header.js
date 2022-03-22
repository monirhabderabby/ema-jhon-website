import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav className='navBar'>
            <div>
                <img className='logo' src={logo} alt="" />
            </div>
            <div>
                <ul className='menuBar'>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Order</a></li>
                    <li><a href="#">Order Review</a></li>
                    <li><a href="#">Manage Inventory</a></li>
                </ul>
            </div>
        </nav>
        </div>
    );
};

export default Header;