import React from 'react';
import {BrowserRouter as Router,Switch, Route, Redirect} from 'react-router-dom';
import {Protected} from './ProtectedRoute';
import { Dashboard } from '../components/dashboard';
import {SignIn} from '../components/SignIn';
import {SignUp} from '../components/SignUp';

export const Routes=()=>{
    return(
    <Router>
        <Switch>
            <Protected exact path='/' component={Dashboard}/>
            <Route path='/sign-in' component={SignIn}/>
            <Route path='/sign-up' component={SignUp}/>
            {/* <Redirect to ="/sign-up" from="/" /> */}
        </Switch>
    </Router>      
    )
}