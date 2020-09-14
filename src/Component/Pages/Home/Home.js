import React, {Component}from 'react'; 
import './Home.css';
import ResponsiveDashboard from '../ResponsiveDashboard/ResponsiveDashboard';

const subTab = [{name:'Overview', value:'overview'},{name:'Destination Navigator', value:'destination_navigator'},{name:'Comparative Dashboard', value:'comparative_dashboard'},{name:'News Feed', value:'news_feed'},];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: subTab,
    };
  }

  render() {
    return (
      <ResponsiveDashboard tab={this.state.tab} />
    );
  }
}

export default Home   