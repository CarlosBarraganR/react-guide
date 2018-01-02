import React from 'react';
import './Navbar.css';
import NavItems from '../NavItems/NavItems';
import logo from '../../../assets/burger-logo.png';

const Navbar = (props) => (
    <header className="Navbar">
        <div>
            <img className="logo" src={logo} />
        </div>
        <nav>
            <NavItems />
        </nav>
    </header>
);

export default Navbar;