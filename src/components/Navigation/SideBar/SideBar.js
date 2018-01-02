import React, { Component } from 'react';
import './SideBar.css';
import logo from '../../../assets/burger-logo.png';
import SideNavItems from './SideNavItems/SideNavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

class SideBar extends Component {
    
    render(){

        let sideBar = this.props.visible ? "SideBar Open" : "SideBar Close";

        return (
            <div>
                <Backdrop visible={this.props.visible} clicked={this.props.close}/>
                <div className={sideBar}>
                    <div>
                        <img className="logo" src={logo} alt="Menu" />
                    </div>
                    <nav>
                        <SideNavItems />
                    </nav>
                </div>
            </div>
        );
    }
};

export default SideBar;