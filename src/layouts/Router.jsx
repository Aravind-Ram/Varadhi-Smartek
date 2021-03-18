import React from 'react';
import {  
  Switch,
  Route
} from "react-router-dom";

import PageNotFound from './404';
import { Row, Card, Col } from 'react-bootstrap';
import UserList from '../Modules/Users/UserList';
import BlogList from '../Modules/Blogs/BlogList';
import BlogView from '../Modules/Blogs/BlogView';
import Home from '../Modules/Dashboard/Home';

const Routing = () => {    

    return (
        <Row>            
            <Col lg={12}>
                <Card> 
                    <Switch>            
                        <Route exact path="/home" component={ Home }/>
                        <Route exact path="/users" component={ UserList }/>
                        <Route exact path="/blogs" component={ BlogList }/>
                        <Route path="/blogs/:id" component={ BlogView }/>
                        <Route path="*">
                            <PageNotFound />
                        </Route>
                    </Switch>
                </Card>
            </Col>
        </Row>    
    );    
}

export default Routing;
