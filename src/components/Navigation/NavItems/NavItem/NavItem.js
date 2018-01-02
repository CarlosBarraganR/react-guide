import React from 'react';
import './NavItem.css'

const NavItem = (props) => (
    <li>
        <a className={
            props.active ? "active" : null} 
            href={ props.url }>
                { props.title }
        </a>
    </li>
);

export default NavItem;
