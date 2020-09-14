import React from 'react';
import auth from './Auth'
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'

export default function Protect(props) {

    function RednderPage() {
        return (
            <Route path={props.path} render={data => auth.getLoginState() ? (
                <props.component {...data}></props.component>) :
                (<Redirect to={{ pathname: '/' }}></Redirect>)}></Route>
        )
    }
    return (
        <>
            {RednderPage()}
        </>
    )
}