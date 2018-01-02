import React from 'react';
import './SideNavItem.css';

const SideNavItem = (props) => (
    <li className="SideNavItem">
        <a className={props.active ? "active" : null}
            href={props.url}>
                {props.title}
        </a>
    </li>
);

export default SideNavItem;