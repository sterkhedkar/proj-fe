import React, { Component } from 'react';
import './AppComponent.css'
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { Responsive } from 'semantic-ui-react';

import Header from './Header/Header'
import Maintab from './Maintab/Maintab'
import SideDrawer from './Header/SideDrawer/SideDrawer';
import Backdrop from './Header/Backdrop/Backdrop';

import PageRander from './Pages/PageRander/PageRander';


class AppComponent extends Component {
    state = {
        sideDrawerOpen: false,
        selectedmenu: false,
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };

    selectedMenuClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
        // this.setState({selectedmenu:data.menuname});
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };

    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }
        
        let RenderNav;
        if(window.location.pathname == "/"){
            RenderNav = <PageRander />
        }
        else{
            RenderNav = <div style={{ marginLeft: '3.8rem' }}><Maintab menuClickHandler={this.selectedMenuClickHandler} />
                        <SideDrawer show={this.state.sideDrawerOpen} />
                        {backdrop}
                        <PageRander /></div>
        }
        // <Header drawerClickHandler={this.drawerToggleClickHandler} />
        // <SideDrawer show={this.state.sideDrawerOpen}/>
        // {backdrop} 
        return (
            <div className="main">

                <Responsive {...Responsive.onlyComputer}>
                    {console.log("path",window.location.pathname)}
                    <main>
                        
                        {/* <Maintab menuClickHandler={this.selectedMenuClickHandler} />
                        <SideDrawer show={this.state.sideDrawerOpen} />
                        {backdrop}
                        <PageRander /> */}
                        {RenderNav}
                    </main>
                </Responsive>
                <Responsive {...Responsive.onlyTablet} style={{ marginLeft: '3.8rem' }}>
                    <main>
                        {/* <Maintab menuClickHandler={this.selectedMenuClickHandler} />
                        <SideDrawer show={this.state.sideDrawerOpen} />
                        {backdrop}
                        <PageRander /> */}
                        {RenderNav}
                    </main>
                </Responsive>
                <Responsive {...Responsive.onlyMobile} style={{ marginLeft: '3.8rem' }}>
                    <main>
                        {/* <Maintab menuClickHandler={this.selectedMenuClickHandler} />
                        <SideDrawer show={this.state.sideDrawerOpen} />
                        {backdrop}
                        <PageRander /> */}
                        {RenderNav}
                    </main>
                </Responsive>

            </div>
        );
    }
}

export default AppComponent
// <Switch>
                    //     <Route exact path='/' render={(props) => <Home globalStore={this.selectedmenu} {...props} /> } />
                    //     <Route path='/satisfaction'  render={(props) => <Satisfaction globalStore={this.selectedmenu} {...props} />} />
                    //     <Route path='/compliance' component={Compliance} />
                    //     <Route path='/visitation_analytics' component={VisitationAnalytics} />
                    //     <Route path='/initiative_overview' component={InitiativeOverview} />
                    // </Switch>


                    // <p>{this.selectedmenu}</p>
                    // <PageRander selectedmenu={this.selectedmenu}/>