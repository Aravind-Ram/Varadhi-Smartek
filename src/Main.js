import React from 'react';

import './style.css';
import Login from './Modules/Authentication/Login';
import AdminLayout from './layouts/Layout';
import {
  Switch,
  Route,
  Redirect 
} from "react-router-dom";

import Authenticate from './Middlewares/Authenticate';

const Main = () => {
  
  return (
    <>
        <Switch>
          <Route exact path="/">
            { <Redirect to="/login" /> }
          </Route>
            <Route path="/login" component={ Login }/>
            <Authenticate path="/" component={ AdminLayout }/>
        </Switch>             
    </>
  );
}

export default Main;
