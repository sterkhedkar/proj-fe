import React,{Component} from 'react';
import './ProgressBar.css';
import { Progress } from 'semantic-ui-react';
import greenDownArrow from '../../../assets/imgs/card/greenDownArrow.svg';


const ProgressBar = props => {  
    let a = props.progressValue-2;
    return (
        <div className="progressHead">
            <img style={{marginLeft: `${a}%`}} src={greenDownArrow} alt="progress"/>
            <Progress percent={props.progressValue} size='tiny' success className="progressBar"></Progress>
            <div className="progress">
                <div style={{width:'90%'}}>-100</div>
                <div>+100</div>
            </div>
        </div>
    );
}

export default ProgressBar