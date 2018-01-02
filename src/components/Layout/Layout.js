import React, { Component } from 'react';
import Navbar from '../Navigation/Navbar/Navbar';
import SideBar from '../Navigation/SideBar/SideBar';
import './Layout.css';

class Layout extends Component{

    state = {
        showSideBar: false
    } 

    open = () => {
        this.setState({ showSideBar: true });
    }

    close = () => {
        this.setState({ showSideBar: false });
    }

    render(){
        return (
            <div>
                <Navbar open={this.open}/>
                <SideBar visible={this.state.showSideBar} close={this.close}/>
                <main className="Content">
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;