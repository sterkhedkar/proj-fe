import React from 'react';
import './Maintab.css';
import { Menu, Responsive, Icon, Image,Header, Segment, Sidebar } from 'semantic-ui-react'
import MenuItem from './MenuItem/MenuItem'

const Maintab = props => {
    return (
      <>
        <Responsive {...Responsive.onlyComputer } className="theme_header tabItem">
          <Sidebar as={Menu}
          animation='overlay'
          icon='labeled'
          className="theme_header"
          vertical
          visible
          view='tabcom'>
            <MenuItem click={props.menuClickHandler} view='tabcom'/>
          </Sidebar>
        </Responsive> 
        <Responsive as={Menu} {...Responsive.onlyTablet } className="theme_header">
          <Sidebar as={Menu}
          animation='overlay'
          icon='labeled'
          className="theme_header"
          vertical
          visible
          view='tabcom'>
            <MenuItem onClick={props.menuClickHandler} view='tabcom'/>
          </Sidebar>
        </Responsive>
        <Responsive as={Menu} icon='labeled' fluid widths={5} fixed='bottom' className="theme_header" maxWidth={Responsive.onlyMobile.maxWidth}>
          <Sidebar as={Menu}
          animation='overlay'
          icon='labeled'
          className="theme_header"
          vertical
          visible
          view='tabcom'>
            <MenuItem onClick={props.menuClickHandler} view='mobile'/>
          </Sidebar>
        </Responsive>
      </>
    );
}

export default Maintab