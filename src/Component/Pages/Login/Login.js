import React, { Component } from 'react';
import './Login.css';
import auth from '../../../Auth/Auth';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            token: null,
            redirect: false,
            setError: '',
        }
    }
    handleChange=(e)=>{
         this.setState({
             [e.target.name]:e.target.value
         })
     }
    submitForm = () => {
        if (this.state.username == "" || this.state.password == "") {
            this.setState({setError:"Fields are required"});
        } else if (this.state.username != "test@sta.com" || this.state.password != "test@1234") {
            this.setState({setError:"Invalide Username or Password!"});
        } else if (this.state.username == "test@sta.com" && this.state.password == "test@1234") {
            auth.onAuthentication()
            this.setState({
                redirect: true,
                setError:''
            })
        }
        
    }
    render() {
        if (this.state.redirect === true) {
            return <Redirect to="/home/overview" />
        }
        return (
            <>
                
                <div class="mainlogin">
                    <p class="signin" align="center">Sign in</p>
                    <form class="formlogin">
                        <input class="un" type="text" align="center" name="username" onChange={this.handleChange} placeholder="Username" />
                        <input class="pass" type="password" align="center" name="password" onChange={this.handleChange} placeholder="Password" />
                        <button type="button" class="submit" align="center" onClick={this.submitForm}>Sign in</button>
                        <p className="loginError"> {this.state.setError} </p>
                    </form>   
                </div>
            </>
        )
    }
}

export default Login
