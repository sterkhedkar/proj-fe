import React, {Component} from 'react'; 
import './VisitationAnalytics.css';
import ResponsiveDashboard from '../ResponsiveDashboard/ResponsiveDashboard';

const subTab = [{name:'Overview', value:'overiew'}];
const cards = [
  {
      size: 'small',
      cardName: 'NPS',
      aux: 'img',
      img: 'nps',
      type: 'keyMatrix',
      status: 'enable',
      chartType:'line',
  },
  {
      size: 'small',
      cardName: 'Repeat Visit (%)',
      aux: 'img',
      img: 'repeat_visit',
      type: 'keyMatrix',
      status: 'enable',
      chartType:'line',
  },
  {
      size: 'small',
      cardName: 'Compliance (%)',
      aux: 'img',
      img: 'compliance',
      type: 'keyMatrix',
      status: 'enable',
      chartType:'line',
  },
  {
      size: 'small',
      cardName: 'Visitation',
      aux: 'img',
      img: 'visitation',
      type: 'keyMatrix',
      status: 'disable',
      chartType:'line',
  },
  {
      size: 'small',
      cardName: 'Spend (SAR)',
      aux: 'img',
      img: 'spend',
      type: 'keyMatrix',
      status: 'disable',
      chartType:'line',
  },
  {
      size: 'large',
      cardName: 'Satisfaction & Compliance Leaderboard (%)',
      aux: 'select',
      type: 'chart',
      status: 'disable',
      options: [{ key: 'destination', value: 'destination', text: 'Destination' },{ key: 'segment', value: 'segment', text: 'Segment' },],
      chartType:'leaderboard',
  },
  {
      size: 'medium',
      cardName: 'CSAT by Driver (%)',
      aux: '',
      type: 'chart',
      status: 'disable',
      chartType:'workinprogress',
  },
  {
      size: 'superlarge',
      cardName: 'CSAT by Offering (%)',
      aux: '',
      type: 'chart',
      status: 'disable',
      chartType:'bubble',
  },
  {
      size: 'superlarge',
      cardName: 'Key Initiatives',
      aux: '',
      type: 'chart',
      status: 'disable',
      chartType:'workinprogress',
  },
];

class VisitationAnalytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: subTab,
      cards: cards,
    };
  }
  render() {
    return (
     <ResponsiveDashboard tab={this.state.tab} tabName="visitation_analytics" cards={this.state.cards}/>
    );
  }
}


export default VisitationAnalytics   