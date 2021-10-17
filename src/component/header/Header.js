import React from 'react';
import './header.css';
import logo from "../../assets/images/logo.png";
import '../../assets/custom';

const Header = () => {
    return (
        <div className="header">
            <div className="app-container">
                <h3> Total Speakers - 90 </h3>
                <div className="logo">
                    <img src={logo} alt={logo}/>
                </div>
                <h3> Speakers Add - 3 </h3>
            </div>
        </div>
    );
};

export default Header;