import React, {Component} from 'react'; 
import './VisitationAnalytics.css';
import ResponsiveDashboard from '../ResponsiveDashboard/ResponsiveDashboard';

const subTab = [{name:'Overview', value:'overiew'}];


class VisitationAnalytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: subTab,
    };
  }
  render() {
    return (
     <ResponsiveDashboard tab={this.state.tab} tabName="visitation_analytics"/>
    );
  }
}


export default VisitationAnalytics   