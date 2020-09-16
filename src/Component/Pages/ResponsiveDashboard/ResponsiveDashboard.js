import React, {Component} from 'react'; 
import { Responsive } from 'semantic-ui-react'
import Dashboard from '../../Dashboard/Dashboard';
// import EventBus from '../../Common/EventBus/EventBus';


// const ResponsiveDashboard = (props) => {
class ResponsiveDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: {},
    };
  }
  // componentDidMount() {
  //   EventBus.on("tabData", (tab) => {
  //     this.setState({ tab });
  //   });

  // }

  render() {
    return (
      <>
        <Responsive {...Responsive.onlyComputer }>
          <Dashboard tab={this.props.tab} tabName={this.props.tabName}/>
        </Responsive>
        <Responsive {...Responsive.onlyTablet }>
          <Dashboard tab={this.props.tab}/>
        </Responsive>
        <Responsive {...Responsive.onlyMobile }>
          <Dashboard tab={this.props.tab}/>
        </Responsive>
      </>
    );
  }
}

export default ResponsiveDashboard   