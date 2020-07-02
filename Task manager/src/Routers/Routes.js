import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Protected} from './ProtectedRoute';
import { Dashboard } from '../components/dashboard';

export const Routes=()=>{
    return(
    <Router>
        <Route exact path='/' component={Dashboard}/>
    </Router>      
    )
}