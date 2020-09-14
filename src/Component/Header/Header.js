import React, { Component } from 'react';
import './Header.css'; 
import DrawerToggleButton from './DrawerToggleButton/DrawerToggleButton';
import { Icon, Input, Dropdown } from 'semantic-ui-react';
import Logo from '../../assets/imgs/STA_LOGO.png';
import filter from '../../assets/imgs/filter.svg'
import user from '../../assets/imgs/user.svg'
 
const options = [
    {
        key: 'profile',
        text: 'Profile',
        value: 'profile',
    },
    {
        key: 'logout',
        text: 'Logout',
        value: 'logout',
    },
];

const Header = props => {
    return  (
        <header className="toolbar">
            <nav className="toolbar__navigation">
                <div className="toolbar__toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>
                <div className="toolbar__logo">
                    <a href="/"><img src={Logo} alt="logo" width="142px"/></a>
                </div>
                <div className="spacer"></div>
                <div className="toolbar_navigation-items">
                    <ul>
                        <li>
                            <Input iconPosition='left' size='mini' placeholder='Search'>
                                <Icon name='search' className="iconColor" />
                                <input className="input"/>
                            </Input>    
                        </li>
                        <li>
                            <img src={filter} alt="filter" style={{width: '23px', marginTop: '4px'}} />
                        </li>
                        <li>
                            <Dropdown text='' fluid  options={options} style={{marginTop: '4px'}}>
                                <img src={user} alt="user" />
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header