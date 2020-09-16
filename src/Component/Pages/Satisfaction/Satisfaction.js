import React, {Component} from 'react'; 
import './Satisfaction.css';
import ResponsiveDashboard from '../ResponsiveDashboard/ResponsiveDashboard';

const subTab = [{name:'Satisfaction Overiew', value:'satisfaction_overiew'},
{name:'Destination Satisfaction', value:'destination_satisfaction'},
{name:'Offering Satisfaction', value:'offering_satisfaction'},
{name:'Call Center Analytics', value:'call_center_analytics'}];

class Satisfaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: subTab,
    };
  }
  render() {
    return (
     <ResponsiveDashboard tab={this.state.tab} tabName="satisfaction"/>
    );
  }
}

export default Satisfaction   