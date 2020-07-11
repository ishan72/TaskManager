import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Routes } from './Routers/Routes';
import { GlobalProvider } from './Context/GlobalState';
import { AuthProvider } from './Context/AuthContext';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <GlobalProvider>
          <Routes />
        </GlobalProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
