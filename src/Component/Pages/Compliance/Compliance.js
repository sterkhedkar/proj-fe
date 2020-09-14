import React, {Component} from 'react'; 
import './Compliance.css';
import ResponsiveDashboard from '../ResponsiveDashboard/ResponsiveDashboard';

const subTab = [{name:'Compliance Overiew', value:'compliance_overiew'}];


class Compliance extends Component {
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

export default Compliance   