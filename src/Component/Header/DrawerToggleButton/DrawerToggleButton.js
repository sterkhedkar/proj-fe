
import React, { Component } from 'react';
import './DrawerToggleButton.css'; 
import toggle from '../../../assets/imgs/sidebar_toggle.svg';


const DrawerToggleButton = props => {    
    return  (
        <button className="toggle-button" onClick={props.click}>
            <img src={toggle}/> 
        </button>
    );
}

export default DrawerToggleButton