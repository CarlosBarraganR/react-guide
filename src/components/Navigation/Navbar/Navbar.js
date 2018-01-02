import React from 'react';
import './Navbar.css';
import NavItems from '../Navbar/NavItems/NavItems';
import logo from '../../../assets/burger-logo.png';

const Navbar = (props) => (
    <header className="Navbar">
        <div>
            <a onClick={props.open}><img className="logoNav" src={logo} alt="Menu" /></a>
        </div>
        <nav className="nav">
            <NavItems />
        </nav>
    </header>
);

export default Navbar;