import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Routes } from './Routers/Routes';
import {GlobalProvider} from './Context/GlobalState';

function App() {
  return (
    <div className="App">
        <Routes/>
    </div>
  );
}

export default App;
