import React, { Component } from 'react';
import auth from '../../../Auth/Auth'
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: null,
            redirect: false
        }
    }
     handleChange=(e)=>{
         this.setState({
             [e.target.name]:e.target.name
         })
     }
    HandleClick = () => {
        this.setState({
            redirect: true
        })
        auth.onAuthentication()


    }
    render() {
        if (this.state.redirect === true) {
            return <Redirect to="/home/overview" />
        }
        return (<>
            <div className="dashboard">
                <input type="text" id="username" onChange={this.handleChange} placeholder="Username" name="user" />
                <input type="password" id="pass" onChange={this.handleChange} placeholder="password" name="pass" />
                <button onClick={this.HandleClick}>Login</button>
            </div>
        </>)
    }
}
export default Login