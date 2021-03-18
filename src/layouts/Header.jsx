import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router";
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';

const Header = () => {

	const [user, setUser] = useState({});

  const history = useHistory();


  useEffect(() => {
    authUser()
  }, []);
  
  

  const logout = () => {
    localStorage.removeItem("auth_token");
    history.push({
      pathname:  "/login"          
    });
  }

  const authUser = () => {

    let options = {
      method: 'get',
      url: '/users',      
      headers: {
        'Accept': 'application/json'				
      },
      params: { email: localStorage.auth_token },
    };
    axios(options)
      .then(function (response) {	            
        if(response.status === 200) {
		      setUser(response.data[0]);
        }
      })
      .catch(function (error) {
        
      });
  }
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand as={Link} to="/home">Varadhi Smartek - Aravindan R</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/users">Users</Nav.Link>
          <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>      
        </Nav>
        <Nav>
          <>
            {
              (user.name) ? 
                (<>
                  <Nav.Link as={Button} variant="primary"><i className="fas fa-user fa-fw"></i> { user.name }</Nav.Link>
                  <Nav.Link eventKey={2} as={Button} variant="primary" onClick={logout}>
                    <i className="fa fa-sign-out-alt fa-fw"></i> Logout
                  </Nav.Link>
                </>) : <></>
            }
          </>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>   
  );
}

export default Header;