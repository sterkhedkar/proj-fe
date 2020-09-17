import React, {Component}from 'react'; 
import ResponsiveDashboard from '../ResponsiveDashboard/ResponsiveDashboard';

const subTab = [{name:'Overview', value:'overview'},{name:'Destination Navigator', value:'destination_navigator'},{name:'Comparative Dashboard', value:'comparative_dashboard'},{name:'News Feed', value:'news_feed'},];
const cards = [
  {
      size: 'large1',
      cardName: 'Destination & Site Map',
      aux: 'select',
      type: 'chart',
      status: 'enable',
      options: [{ key: 'compliance', value: 'compliance', text: 'Compliance' },{ key: 'satisfaction', value: 'satisfaction', text: 'Satisfaction' },],
      chartType:'workinprogress',
  },
  {
      size: 'medium1',
      cardName: 'NPS',
      aux: 'img',
      img: 'nps',
      type: 'keyMatrix',
      status: 'enable',
      chartType:'line',
  },
  {
      size: 'medium1',
      cardName: 'Compliance (%)',
      aux: 'img',
      img: 'compliance',
      type: 'keyMatrix',
      status: 'enable',
      chartType:'line',
  },
  {
      size: 'medium1',
      cardName: 'Repeat Visit (%)',
      aux: 'img',
      img: 'repeat_visit',
      type: 'keyMatrix',
      status: 'enable',
      chartType:'line',
  },
  {
      size: 'medium1',
      cardName: 'Visitation',
      aux: 'img',
      img: 'visitation',
      type: 'keyMatrix',
      status: 'disable',
      chartType:'line',
  },
  {
      size: 'superlarge',
      cardName: 'Customer Satisfaction and Compliance by Offering (%)',
      aux: 'radio',
      type: 'chart',
      status: 'enable',
      chartType:'bubble',
  },
  {
      size: 'large2',
      cardName: 'Site Visitation, Satisfaction & Compliance Leaderboard',
      aux: '',
      type: 'chart',
      status: 'enable',
      chartType:'leaderboard',
  },
  {
      size: 'medium2',
      cardName: 'Tourist Attraction Compliance by Category',
      aux: '',
      type: 'chart',
      status: 'enable',
      chartType:'workinprogress',
  },
];
class HomeDestination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: subTab,
      cards: cards,
    };
  }

  render() {
    return (
      // <>
      //   <p>Home/overview</p>
        <ResponsiveDashboard tab={this.state.tab} tabName="home" cards={this.state.cards}/>
      // </>
    );
  }
}

export default HomeDestination   