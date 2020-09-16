import React from 'react';
import './ProgressLeaderboard.css';
import { Progress } from 'semantic-ui-react';

const ProgressLeaderboard = props => {  

    let barcolor = ['progressBar'];

    if(props.color === 'green'){
        if(props.progressValue <= 65) barcolor = ['progressBar', 'green3Col'];
        else if(props.progressValue >= 66 && props.progressValue <= 79) barcolor = ['progressBar', 'green2Col'];
        else barcolor = ['progressBar', 'green1Col'];
    } else {
        if(props.progressValue <= 65) barcolor = ['progressBar', 'green3Col'];
        else if(props.progressValue >= 66 && props.progressValue <= 79) barcolor = ['progressBar', 'orangeCol'];
        else barcolor = ['progressBar', 'redCol'];
    }
    
    return (
        <div className="progressHead">
            <Progress percent={props.progressValue} size='tiny' className={barcolor}></Progress>
        </div>
    );

}

export default ProgressLeaderboard