import React, {Component} from 'react';
import './SubTab.css';
import { Menu } from 'semantic-ui-react';
import Settings from '../../../assets/imgs/settings.png';
import user from '../../../assets/imgs/user.svg';
import { BrowserRouter as Switch, Link } from 'react-router-dom';

class SubTab extends Component {
    constructor(props) {
        super(props);
        
    }
    
    // state = { activeItem: this.props.tab[0].value };
    
    // handleItemClick = (e) => this.setState({ activeItem: name })
    // onClick={this.handleItemClick}

    render() {
        let activeItem= window.location.pathname.split('/')[2];
        // const { activeItem } = this.state;
        const subItemList = this.props.tab;
        
        return (
            <div className="subtabDiv">
                <h4 className={`pageHead ${this.props.tabName === "initiative_overview" || this.props.tabName === "visitation_analytics"?'setWidth':''}`}>{this.props.tabName.split('_').join(" ")}</h4>
                <Menu pointing secondary className="subTab">
                    {subItemList.map((subtab) => {
                        return <Menu.Item key={subtab.value} as={Link} name={subtab.value} active={activeItem === subtab.value} to={`/${this.props.tabName}/${subtab.value}`}/>
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
