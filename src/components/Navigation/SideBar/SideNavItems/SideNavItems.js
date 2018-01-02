import React from 'react';
import './SideNavItems.css';
import SideNavItem from './SideNavItem/SideNavItem';

const SideNavItems = (props) => (
    <ul className="SideNavItems">
        <SideNavItem active url="/" title="Burger Maker"/>
        <SideNavItem url="/" title="Checkout"/>
    </ul>
);

export default SideNavItems;