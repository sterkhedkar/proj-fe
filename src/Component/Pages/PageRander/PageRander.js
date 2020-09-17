import React, {Component} from 'react';
import Home from '../Home/Home';
import HomeDestination from '../HomeDestination/HomeDestination';
import Satisfaction from '../Satisfaction/Satisfaction';
import Compliance from '../Compliance/Compliance';
import VisitationAnalytics from '../VisitationAnalytics/VisitationAnalytics';
import InitiativeOverview from '../InitiativeOverview/InitiativeOverview';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'
import Protect from '../../../Auth/Protect'
import Login from '../Login/Login'
import Map from '../../../Testing/Map'

class PageRander extends Component { 
    render(){
        return(
            <>
               
                  <Route exact path="/" component={()=> <Login/>}/>
                <Route   path="/map" component={()=> <Map/>}/>
                <Protect path="/satisfaction" component={()=> <Satisfaction/>}/>
                <Protect path="/compliance" component={()=> <Compliance />}/>
                <Protect path="/visitation_analytics" component={()=> <VisitationAnalytics />}/>
                <Protect path="/initiative_overview" component={()=> <InitiativeOverview />}/>
                <Protect path="/home/overview" component={()=> <Home/>}/>
                <Protect path="/home/destination_navigator" component={()=> <HomeDestination/>}/>
            </>
        );
    }
}

export default PageRander