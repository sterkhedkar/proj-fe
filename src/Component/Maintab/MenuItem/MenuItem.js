import React, {Component} from 'react';
import './MenuItem.css';
import { Menu } from 'semantic-ui-react'
import { BrowserRouter as Switch, Link } from 'react-router-dom';
import Logo from '../../../assets/imgs/STA LOGOTYPE WHITE RGB.png';
import Home from '../../../assets/imgs/home.svg';
import Satisfaction from '../../../assets/imgs/satisfaction.svg';
import Compliance from '../../../assets/imgs/compliance.svg';
import VisitationAnalytics from '../../../assets/imgs/visitation_analytics.svg';
import InitiativeOverview from '../../../assets/imgs/Initiative_overview.svg';
import HomeActive from '../../../assets/imgs/home_active.svg';
import SatisfactionActive from '../../../assets/imgs/satisfaction_active.svg';
import ComplianceActive from '../../../assets/imgs/compliance_active.svg';
import VisitationAnalyticsActive from '../../../assets/imgs/visitation_analytics_active.svg';
import InitiativeOverviewActive from '../../../assets/imgs/Initiative_overview_active.svg';
import { useLocation } from 'react-router-dom';


const MenuItem = props => {

    const location = useLocation();
    let currloc = location.pathname.split('/')[1]
    return (
        <>
          <Menu.Item data-menuname="logo" className={`menuItem ${props.view === 'mobile' ?'mobView itemActive':'tabView'} logoSvg`} onClick={props.click} to="logo"> 
            <img src={Logo} alt="logo" className={`${props.view === 'tabcom' ?'menuLogo':'menuMobSvg'}`} />
          </Menu.Item>
          <Menu.Item data-menuname="home" as={Link} className={`menuItem ${props.view === 'mobile' ?'mobView itemActive':'tabView'} ${props.view === 'tabcom' && currloc === 'home'?'active':''} ${props.view === 'mobile' && currloc === 'home'?'activeMob':''}`} to='/home/overview'> 
            <img src={Home} alt="Home" className={`${props.view === 'tabcom' ?'menuSvg':'menuMobSvg'} ${currloc != 'home'?'displayImgB':'displayImgN'}`} />
            <img src={HomeActive} alt="Home" className={`${props.view === 'tabcom' ?'menuSvg':'menuMobSvg'} ${currloc === 'home'?'displayImgB':'displayImgN'}`} />
          </Menu.Item>
          <Menu.Item data-menuname="satisfaction" as={Link} className={`menuItem ${props.view === 'mobile' ?'mobView itemActive':'tabView'} ${props.view === 'tabcom' && currloc === 'satisfaction'?'active':''} ${props.view === 'mobile' && currloc === 'satisfaction'?'activeMob':''} `} to='/satisfaction'>
            <img src={Satisfaction} alt="Satisfaction" className={`${props.view === 'tabcom' ?'menuSvg':'menuMobSvg'} ${currloc != 'satisfaction'?'displayImgB':'displayImgN'}`} />
            <img src={SatisfactionActive} alt="Satisfaction" className={`${props.view === 'tabcom' ?'menuSvg':'menuMobSvg'} ${currloc === 'satisfaction'?'displayImgB':'displayImgN'}`} />
          </Menu.Item>
          <Menu.Item data-menuname="compliance" as={Link} className={`menuItem ${props.view === 'mobile' ?'mobView itemActive':'tabView'} ${props.view === 'tabcom' && currloc === 'compliance'?'active':''} ${props.view === 'mobile' && currloc === 'compliance'?'activeMob':''}`} to='/compliance'>
            <img src={Compliance} alt="Compliance" className={`${props.view === 'tabcom' ?'menuSvg':'svgWidth'} ${currloc != 'compliance'?'displayImgB':'displayImgN'}`} />
            <img src={ComplianceActive} alt="Compliance" className={`${props.view === 'tabcom' ?'menuSvg':'menuMobSvg'} ${currloc === 'compliance'?'displayImgB':'displayImgN'}`} />
          </Menu.Item>
          <Menu.Item data-menuname="visitation_analytics" as={Link} className={`menuItem ${props.view === 'mobile' ?'mobView itemActive':'tabView'} ${props.view === 'tabcom' && currloc === 'visitation_analytics'?'active':''} ${props.view === 'mobile' && currloc === 'visitation_analytics'?'activeMob':''}`} to='/visitation_analytics'>
            <img src={VisitationAnalytics} alt="VisitationAnalytics" className={`${props.view === 'tabcom' ?'menuSvg':'menuMobSvg'} ${currloc != 'visitation_analytics'?'displayImgB':'displayImgN'}`} />
            <img src={VisitationAnalyticsActive} alt="VisitationAnalytics" className={`${props.view === 'tabcom' ?'menuSvg':'menuMobSvg'} ${currloc === 'visitation_analytics'?'displayImgB':'displayImgN'}`} />
          </Menu.Item>
          <Menu.Item  data-menuname="initiative_overview" as={Link} className={`menuItem ${props.view === 'mobile' ?'mobView itemActive':'tabView'} ${props.view === 'tabcom' && currloc === 'initiative_overview'?'active':''} ${props.view === 'mobile' && currloc === 'initiative_overview'?'activeMob':''}`} to='/initiative_overview'>
            <img src={InitiativeOverview} alt="InitiativeOverview" className={`${props.view === 'tabcom' ?'menuSvg':'menuMobSvg'} ${currloc != 'initiative_overview'?'displayImgB':'displayImgN'}`} />
            <img src={InitiativeOverviewActive} alt="InitiativeOverview" className={`${props.view === 'tabcom' ?'menuSvg':'menuMobSvg'} ${currloc === 'initiative_overview'?'displayImgB':'displayImgN'}`} />
          </Menu.Item>
        </>
    );
}
    
export default MenuItem   

// <Menu.Item data-menuname="home" as={Link} onClick={handleClick.bind(this)} className={`menuItem ${props.view === 'mobile' ?'mobView itemActive':'tabView'} ${props.view === 'tabcom' && location.pathname === '/'?'active':''} ${props.view === 'mobile' && location.pathname === '/'?'activeMob':''}`} to='/'> 
//             <img src={Home} alt="Home" className={`${props.view === 'tabcom' ?'menuSvg':'menuMobSvg'}`} />
//             Home
//           </Menu.Item>
//           <Menu.Item data-menuname="satisfaction" as={Link} onClick={handleClick.bind(this)} className={`menuItem ${props.view === 'mobile' ?'mobView itemActive':'tabView'} ${props.view === 'tabcom' && location.pathname === '/satisfaction'?'active':''} ${props.view === 'mobile' && location.pathname === '/satisfaction'?'activeMob':''} `} to='satisfaction'>
//             <img src={Satisfaction} alt="Satisfaction" className={`${props.view === 'tabcom' ?'menuSvg':'menuMobSvg'}`} /> 
//             Satisfaction
//           </Menu.Item>
//           <Menu.Item data-menuname="compliance" as={Link} onClick={handleClick.bind(this)} className={`menuItem ${props.view === 'mobile' ?'mobView itemActive':'tabView'} ${props.view === 'tabcom' && location.pathname === '/compliance'?'active':''} ${props.view === 'mobile' && location.pathname === '/compliance'?'activeMob':''}`} to='compliance'>
//             <img src={Compliance} alt="Compliance" className={`${props.view === 'tabcom' ?'menuSvg':'svgWidth'}`} /> 
//             Compliance
//           </Menu.Item>
//           <Menu.Item data-menuname="visitation_analytics" as={Link} onClick={handleClick.bind(this)} className={`menuItem ${props.view === 'mobile' ?'mobView itemActive':'tabView'} ${props.view === 'tabcom' && location.pathname === '/visitation_analytics'?'active':''} ${props.view === 'mobile' && location.pathname === '/visitation_analytics'?'activeMob':''}`} to='visitation_analytics'>
//             <img src={VisitationAnalytics} alt="VisitationAnalytics" className={`${props.view === 'tabcom' ?'menuSvg':'menuMobSvg'}`} /> 
//             Visitation <span className={`${props.view === 'mobile' ?'menuDisplayNone':'menuDisplayBlock'}`}> Analytics</span>
//           </Menu.Item>
//           <Menu.Item  data-menuname="initiative_overview" as={Link} onClick={handleClick.bind(this)} className={`menuItem ${props.view === 'mobile' ?'mobView itemActive':'tabView'} ${props.view === 'tabcom' && location.pathname === '/initiative_overview'?'active':''} ${props.view === 'mobile' && location.pathname === '/initiative_overview'?'activeMob':''}`} to='initiative_overview'>
//             <img src={InitiativeOverview} alt="InitiativeOverview" className={`${props.view === 'tabcom' ?'menuSvg':'menuMobSvg'}`} /> 
//             Initiative <span className={`${props.view === 'mobile' ?'menuDisplayNone':'menuDisplayBlock'}`}> Overview</span>
//           </Menu.Item>