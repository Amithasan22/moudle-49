import React from 'react';
import logo from '../../images/logo.png'
import './Hedar.css'
const Hedar = () => {
    return (
        <div className="hedar-image">
            <img className="logo" src={logo} alt="" />
            <nav className="navigation">
                <a href="/shop">Shop</a>
                <a href="/shop">Review</a>
                <a href="/shop">Manage Inventory</a></nav>
        </div>
    );
};

export default Hedar;