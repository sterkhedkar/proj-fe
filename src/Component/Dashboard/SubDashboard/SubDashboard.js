import React, {Component} from 'react';
import './SubDashboard.css';
import { Responsive } from 'semantic-ui-react'

import Charts from './Charts/Charts';
import Interventions from './Interventions/Interventions';
import InterventionsDetail from './Interventions/InterventionsDetail/InterventionsDetail';
import notification from '../../../assets/imgs/notification.svg';

// function SubDashboard (){ 
class SubDashboard extends Component { 
    constructor(props) {
        super(props);
    }
    state = {
        interventionDetailOpen: false
    };

    interventionToggleClickHandler = () => {
        this.setState((prevState) => {
            return {interventionDetailOpen: !prevState.interventionDetailOpen};
        });
    };
    // <div className={`${!this.state.interventionDetailOpen ? 'interventionCount' :'display'}`}>
    //                                 <span>3</span>
    //                             </div>
                                
    render(){ 
        return (
            <>
                <Responsive {...Responsive.onlyComputer }>
                    <div className="subDashboard">
                        <div className="mainDiv">
                            <Charts chartHandler={this.state.interventionDetailOpen} cards={this.props.cards}/>
                            <div className={`interventionsDiv ${this.state.interventionDetailOpen ? 'interventionChange' :''}`}>
                                <div className="interventionDetail">
                                    <Interventions interventionClickHandler={this.interventionToggleClickHandler}/>
                                    <InterventionsDetail show={this.state.interventionDetailOpen} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Responsive> 
                <Responsive {...Responsive.onlyTablet }>
                    <div className="subDashboard">
                        <div className="mainDiv">
                            <Charts chartHandler={this.state.interventionDetailOpen} cards={this.props.cards}/>
                            <div className={`interventionsDiv ${this.state.interventionDetailOpen ? 'interventionChange' :''}`}>
                                <div className="interventionDetail">
                                    <Interventions interventionClickHandler={this.interventionToggleClickHandler}/>
                                    <InterventionsDetail show={this.state.interventionDetailOpen} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Responsive> 
                <Responsive {...Responsive.onlyMobile }>
                    <div className="subDashboard">
                        <div className="mainDiv">
                            <Charts chartHandler={this.state.interventionDetailOpen} cards={this.props.cards}/>
                        </div>
                    </div>
                </Responsive> 
            </>
        );
    }
}

export default SubDashboard