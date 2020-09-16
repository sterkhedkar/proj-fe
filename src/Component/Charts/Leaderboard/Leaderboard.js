import React from 'react';
import './Leaderboard.css';
import HomeLeaderboard from './HomeLeaderboard/HomeLeaderboard';
import { useLocation } from 'react-router-dom';


const Leaderboard = props => { 

    // let leaderboardComp;
    // const location = useLocation();
    // if(location.pathname === '/home'){
    //     leaderboardComp = <HomeLeaderboard data={props.data}/>
    // }
    
    return  (
            <HomeLeaderboard data={props.data}/>
            // {leaderboardComp}
    )
}

export default Leaderboard

