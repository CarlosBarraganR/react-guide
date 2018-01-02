import React from 'react';
import Navbar from '../Navigation/Navbar/Navbar';
import './Layout.css';

const layout = ( props ) => (
    <div>
        <Navbar />
        <main className="Content">
           {props.children}
        </main>
    </div>
);

export default layout;