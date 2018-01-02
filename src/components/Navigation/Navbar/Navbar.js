import React from 'react';
import './Navbar.css';
import logo from '../../../assets/burger-logo.png';

const Navbar = (props) => (
    <header className="Navbar">
        <div>
            <img className="logo" src={logo} />
        </div>
        <nav>
            NAVITEMS
        </nav>
    </header>
);

export default Navbar;