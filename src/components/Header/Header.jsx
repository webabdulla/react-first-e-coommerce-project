import React from 'react';
import './Header.css';
import logo from "../../images/Logo.svg"
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
            <a href="shop">shop</a>
            <a href="order">order</a>
            <a href="event">event</a>
            <a href="logins">logins</a>
            </div>
        </nav>
    );
};

export default Header;