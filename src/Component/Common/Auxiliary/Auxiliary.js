import React from 'react';
import './Auxiliary.css';
import { Select } from 'semantic-ui-react';

const Auxiliary = props => {  
    
    return  (
        <>
            <Select className="selectAux" placeholder='Select here' options={props.options} defaultValue={props.options[0].value} />
        </>
    )
}

export default Auxiliary