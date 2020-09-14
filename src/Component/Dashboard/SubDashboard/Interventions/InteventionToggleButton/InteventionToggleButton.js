
import React from 'react';
import toggle from '../../../../../assets/imgs/interventionsOpen.svg';
import './InteventionToggleButton.css';

const InteventionToggleButton = props => {    
    return  (
        <a className="intervention-toggle" onClick={props.click}>
            <img src={toggle} alt="toggle" className="toggleimg"/> 
        </a>
    );
}

export default InteventionToggleButton