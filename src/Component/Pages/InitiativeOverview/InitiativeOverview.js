import React, {Component} from 'react'; 
import './InitiativeOverview.css';
import ResponsiveDashboard from '../ResponsiveDashboard/ResponsiveDashboard';

const subTab = [{name:'Initiative Overiew', value:'initiative_overview'}];


class InitiativeOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: subTab,
    };
  }
  render() {
    return (
     <ResponsiveDashboard tab={this.state.tab}/>
    );
  }
}

export default InitiativeOverview   