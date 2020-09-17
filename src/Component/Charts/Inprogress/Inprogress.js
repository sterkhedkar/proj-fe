import React, { Component } from 'react';
import './Inprogress.css';

export default class Inprogress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: null,
            redirect: false
        }
    }
    render(){
        return(
            <p className="inprogress">Work In Progress</p>
        )
    }
}

