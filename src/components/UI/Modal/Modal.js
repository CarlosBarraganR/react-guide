import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css'

const modal = (props) => {
    return (
        <div>
            <Backdrop visible={props.visible} clicked={props.modalClose}/>
            <div 
                className="Modal"
                style={{
                    transform: props.visible ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.visible ? '1' : '0'
                }}>
                    {props.children}
            </div>
        </div>
    )
};

export default modal;