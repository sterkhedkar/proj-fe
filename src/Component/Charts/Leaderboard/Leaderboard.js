import React, {Component} from 'react';
import './Leaderboard.css';
import HomeLeaderboard from './HomeLeaderboard/HomeLeaderboard';
import DestinationLeaderboard from './DestinationLeaderboard/DestinationLeaderboard';

class Leaderboard extends Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        let leaderboardComp;
        
        if(this.props.cardName === 'Satisfaction & Compliance Leaderboard (%)'){
            leaderboardComp = <HomeLeaderboard data={this.props.data}/>
        } else if(this.props.cardName === 'Site Visitation, Satisfaction & Compliance Leaderboard'){
            leaderboardComp = <DestinationLeaderboard data={this.props.data}/>
        }
        
        return  (
            <>
                {leaderboardComp}
            </>
        )
    }
}

export default Leaderboard

