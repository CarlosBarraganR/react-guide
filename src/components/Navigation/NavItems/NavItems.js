import React from 'react';
import './NavItems.css';
import NavItem from './NavItem/NavItem';

const NavItems = (props) => (
    <ul className="NavItems">
        <NavItem active={true} url="/" title="Burger Maker" />
        <NavItem active={false} url="/" title="Checkout" />
    </ul>
);

export default NavItems;