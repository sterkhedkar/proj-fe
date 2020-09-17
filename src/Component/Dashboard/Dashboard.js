import React, {Component} from 'react';
import { Responsive } from 'semantic-ui-react'
import SubTab from './SubTab/SubTab';
import Filter from './Filter/Filter';
import SubDashboard from './SubDashboard/SubDashboard';
import './Dashboard.css';
// import EventBus from '../Common/EventBus/EventBus';

// function Dashboard (){ 
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: {},
    };
  }


  
//   <div className="fixedTabs">
//   <SubTab tab={this.props.tab} /> 
//   <Filter /> 
// </div>

  render() {
    return ( 
        <>
        <Responsive {...Responsive.onlyComputer }>
            <div className="dashboard">
                <SubTab tab={this.props.tab} tabName={this.props.tabName}/> 
                <Filter /> 
                <SubDashboard cards={this.props.cards}/>
            </div>
        </Responsive>
        <Responsive {...Responsive.onlyTablet }>
            <div className="dasboard">
                <SubTab tab={this.props.tab} tabName={this.props.tabName}/> 
                <Filter /> 
                <SubDashboard cards={this.props.cards}/>
            </div>
        </Responsive>
        <Responsive {...Responsive.onlyMobile }>
            <div className="dashboard">
                <SubTab tab={this.props.tab} tabName={this.props.tabName}/> 
                <Filter /> 
                <SubDashboard cards={this.props.cards}/>
            </div>
        </Responsive>
        </>
    );
    }
}

export default Dashboard