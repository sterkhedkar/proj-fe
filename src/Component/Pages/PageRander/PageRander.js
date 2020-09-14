import React, {Component} from 'react';
import Home from '../Home/Home';
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
                {/* {
                    this.props.selectedmenu === 'home'?<Home/>: 
                    this.props.selectedmenu === 'satisfaction'?<Satisfaction/>:
                    this.props.selectedmenu === 'compliance'?<Compliance />:
                    this.props.selectedmenu === 'visitation_analytics'?<VisitationAnalytics />:<InitiativeOverview />
                } */}
                  <Route exact path="/" component={()=> <Login/>}/>
                <Route exact path="/map" component={()=> <Map/>}/>
                <Protect path="/home" component={()=> <Home/>}/>
                <Protect path="/satisfaction" component={()=> <Satisfaction/>}/>
                <Protect path="/compliance" component={()=> <Compliance />}/>
                <Protect path="/visitation_analytics" component={()=> <VisitationAnalytics />}/>
                <Protect path="/initiative_overview" component={()=> <InitiativeOverview />}/>
            </>
        );
    }
}

export default PageRander