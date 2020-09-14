import React from 'react';
import './Interventions.css';
import InteventionToggleButton from './InteventionToggleButton/InteventionToggleButton'

const Interventions = props => {
    return (
        <div style={{lineHeight:'78vh'}}>
            <InteventionToggleButton  click={props.interventionClickHandler}/>
        </div>
    );
}

export default Interventions