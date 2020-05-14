import React from 'react';
import './Logo.css';
import logo from './logo.png';

const Logo = () => {
    return (
        <div className="logoImage center">
            <img src={logo} alt='logo' width='64' height='64' />
        </div>
    )
}

export default Logo