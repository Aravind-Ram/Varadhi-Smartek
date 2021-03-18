import React from "react";
import {
  Route,
  Redirect,
} from "react-router-dom";

function Authenticate({ component: Component, ...rest }) {

    const isAuthenticated = () => {
        let AuthToken = localStorage.getItem('auth_token');
        if(AuthToken) {
            return true;
        }
        return false;
    }
    
    return (
        <Route {...rest} render={(props) => (
            (isAuthenticated())
              ? <Component {...props} />
              : <Redirect to='/login' />
          )} />
    );
}

export default Authenticate;