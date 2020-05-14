import React from 'react';
import './Logo.css';
import logo from './logo.png';

const Logo = () => {
    return (
        <div className="logoImage">
            <img src={logo} alt='logo' width='140' height='140' />
        </div>
    )
}

export default Logo