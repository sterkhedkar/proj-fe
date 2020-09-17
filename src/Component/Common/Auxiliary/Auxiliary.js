import React, {Component} from 'react';
import './Auxiliary.css';
import { Select } from 'semantic-ui-react';


class Auxiliary extends Component { 
    constructor(props) {
        super(props);
    }

    getBird = (event, {value}) => {
        console.log(value);
    }

    render(){
        return  (
            <>
                <Select className="selectAux" placeholder='Select here' options={this.props.options} defaultValue={this.props.options[0].value} onChange={this.getBird}/>
            </>
        )
    }
}

export default Auxiliary