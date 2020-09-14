import React, {Component} from 'react';
import './SubTab.css';
import { Menu } from 'semantic-ui-react';
import Settings from '../../../assets/imgs/settings.png';
import user from '../../../assets/imgs/user.svg';

class SubTab extends Component {
    constructor(props) {
        super(props);
        
    }
    
    state = { activeItem: this.props.tab[0].value };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    render() {
        const { activeItem } = this.state;
        const subItemList = this.props.tab;
        const pageName = window.location.pathname.substring(1).split('_').join(" ");
        return (
            <div className="subtabDiv">
                <h4 className={`pageHead ${window.location.pathname === "/initiative_overview" || window.location.pathname === "/visitation_analytics"?'setWidth':''}`}>{pageName}</h4>
                <Menu pointing secondary className="subTab">
                    {subItemList.map((subtab) => {
                        return <Menu.Item key={subtab.value} name={subtab.value} active={activeItem === subtab.value} onClick={this.handleItemClick}/>
                    })}
                </Menu>
                <div className="toolbar_navigation-items">
                    <ul>
                        <li>
                            <img src={Settings} alt="setting" style={{width: '21px'}} />
                        </li>
                        <li>
                            <img src={user} alt="user" />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SubTab