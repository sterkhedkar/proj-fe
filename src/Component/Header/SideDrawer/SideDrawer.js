import React, { Component } from 'react';
import './SideDrawer.css'; 
import { Menu, Sidebar } from 'semantic-ui-react';
import MenuItem from '../../Maintab/MenuItem/MenuItem';
  
const SideDrawer = props => {  
    let drawerClasses = 'side-drawer' ;
    if(props.show){  
        drawerClasses = 'side-drawer open' ;
    }
    const sidebar = 'full';
    return  (
        <nav className={drawerClasses}>
            <Sidebar as={Menu}
                animation='overlay'
                icon='labeled'
                vertical
                visible
                className="theme_header"
                view='tabcom'>
                <MenuItem click={props.menuClickHandler} fullSidebar={sidebar} view='tabcom'/>
            </Sidebar>
        </nav>
        // <Sidebar as={Menu}
        //   animation='overlay'
        //   icon='labeled'
        //   className={drawerClasses}
        //   vertical
        //   visible
        //   view='tabcom'>
        //     <MenuItem click={props.menuClickHandler} view='tabcom'/>
        //   </Sidebar>
    );
}

export default SideDrawer