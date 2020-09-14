import React,{Component} from 'react';
import './Card.css';
import ProgressBar from '../ProgressBar/ProgressBar';
import BubbleChart from '../BubbleChart/BubbleChart';
import LineChart from '../LineChart/LineChart';

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
    render(){
        // console.log("res : ", this.state.ApiData);
        let list, img, progress, keyMatrix, showChart;
        // if(this.state.ApiData.length != 0){
        //     list = <ul>{ this.state.ApiData.data.map(d => <li key={d.id}>{d.title}</li>)}</ul>
        // }
        if(this.props.data.img){
            img = <img src={
                this.props.data.img == 'nps'? nps : 
                this.props.data.img == 'repeat_visit'? repeat_visit : 
                this.props.data.img == 'compliance'? compliance :
                this.props.data.img == 'visitation'? visitation : spend } alt="kpicard"/>
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
            showChart = <BubbleChart size={this.props.data.size} />
        } else if(this.props.data.chartType == 'line'){
            showChart = <LineChart />
        }
        
        return (
                <div className={`card ${this.props.data.size? this.props.data.size: ''}`}>
                    <div className="cardHead">
                        <h5>{this.props.data.cardName}</h5>
                        {img}
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