import React,{Component} from 'react';
import './Card.css';
import ProgressBar from '../ProgressBar/ProgressBar';
import BubbleChart from '../../Charts/BubbleChart/BubbleChart';
import LineChart from '../../Charts/LineChart/LineChart';
import Auxiliary from '../../Common/Auxiliary/Auxiliary';
import Leaderboard from '../../Charts/Leaderboard/Leaderboard';

import {getMethod} from '../API/Api';

import nps from '../../../assets/imgs/card/nps.svg';
import repeat_visit from '../../../assets/imgs/card/repeat_visit.svg';
import compliance from '../../../assets/imgs/card/compliance.svg';
import visitation from '../../../assets/imgs/card/visitation.svg';
import spend from '../../../assets/imgs/card/spend.svg';
import greenArrow from '../../../assets/imgs/card/greenArrow.svg';
import grayArrow from '../../../assets/imgs/card/grayArrow.svg';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterData: {},
            ApiData:[]
        };    
        // this.getFilterData = this.handleFilterData.bind(this);
    }
    
    componentDidMount = async() => {
        const data = {id:1}
        this.setState(
            {ApiData: await getMethod(data)}
        );
        // console.log("state : ",await getMethod(data));
        // console.log("ApiData : ",this.state.ApiData);
    }  
    chartResize = () => {
        console.log('resize chart');
    }
    render(){
        // console.log("res : ", this.state.ApiData);
        let list, aux, progress, keyMatrix, showChart;
        // if(this.state.ApiData.length != 0){
        //     list = <ul>{ this.state.ApiData.data.map(d => <li key={d.id}>{d.title}</li>)}</ul>
        // }
        if(this.props.data.aux == 'img'){
            aux = <img src={
                this.props.data.img == 'nps'? nps : 
                this.props.data.img == 'repeat_visit'? repeat_visit : 
                this.props.data.img == 'compliance'? compliance :
                this.props.data.img == 'visitation'? visitation : spend } alt="kpicard"/>
        } else if(this.props.data.aux == 'select'){
            aux = <Auxiliary options={this.props.data.options}/>
        }
        if(this.props.data.cardName === 'NPS'){
            progress = <ProgressBar progressValue={43}/>
        }
        if(this.props.data.type === 'keyMatrix'){
            keyMatrix = <div className="scroll">
                            <div className={`${this.props.data.status === 'enable'?'keyMatrixEnable':'keyMatrixDisble'} ${this.props.data.cardName !== 'NPS'?'progressLine':''}`}>
                                <label className="keyMatrixLabel">43</label>
                                <img src={this.props.data.status === 'enable'?greenArrow: grayArrow} alt="progress"/>
                                <label className={`${this.props.data.status === 'enable'?'green':'gray'}`}>3%</label>
                            </div>
                            {progress}
                        </div>
        }
        
        if(this.props.data.chartType == 'bubble'){
            showChart = <BubbleChart size={this.props.size} resize={this.chartResize} />
        } else if(this.props.data.chartType == 'line'){
            showChart = <LineChart />
        } else if(this.props.data.chartType == 'leaderboard'){
            const data = {
                head:['NPS','Repeat Visit','Compliance'],
                data:[
                    {key:"tabuk", "NPS":{value:"86", delta:'positive'},"Repeat_Visit":{value:"91", delta:'positive'},"Compliance":{value:"63", delta:'positive'}},
                    {key:"Umluj", "NPS":{value:"69", delta:'negative'},"Repeat_Visit":{value:"73", delta:'negative'},"Compliance":{value:"52", delta:'negative'}},
                    {key:"Abha", "NPS":{value:"68", delta:'negative'},"Repeat_Visit":{value:"86", delta:'negative'},"Compliance":{value:"67", delta:'negative'}},
                    {key:"Jeddah", "NPS":{value:"46", delta:'negative'},"Repeat_Visit":{value:"52", delta:'negative'},"Compliance":{value:"72", delta:'negative'}},
                    {key:"Al Baha", "NPS":{value:"28", delta:'negative'},"Repeat_Visit":{value:"49", delta:'negative'},"Compliance":{value:"66", delta:'negative'}},
                    {key:"Yanbu", "NPS":{value:"27", delta:'negative'},"Repeat_Visit":{value:"49", delta:'negative'},"Compliance":{value:"70", delta:'negative'}},
                    {key:"KAEC", "NPS":{value:"27", delta:'positive'},"Repeat_Visit":{value:"41", delta:'positive'},"Compliance":{value:"80", delta:'positive'}},
                    {key:"Tarf", "NPS":{value:"10", delta:'positive'},"Repeat_Visit":{value:"27", delta:'positive'},"Compliance":{value:"62", delta:'positive'}},
                    {key:"Jizan", "NPS":{value:"10", delta:'positive'},"Repeat_Visit":{value:"26", delta:'positive'},"Compliance":{value:"72", delta:'positive'}}
                ],
                color:{"NPS":'green',"Repeat_Visit":'mix',"Compliance":"mix"},
            };
            showChart = <Leaderboard data={data}/>
        }
        
        return (
                <div className={`card ${this.props.size? this.props.size: ''}`}>
                    <div className="cardHead">
                        <h5>{this.props.data.cardName}</h5>
                        {aux}
                    </div>
                    {keyMatrix}
                    <div className="chart" style={{overflow:'auto'}}>
                        {showChart}
                    </div>
                </div>
        )
    }
}

export default Card