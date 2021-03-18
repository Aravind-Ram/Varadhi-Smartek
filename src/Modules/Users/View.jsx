import React from 'react';

import { Table, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const View = (props) => {
    
    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>                
                        <th>Attribute</th>
                        <th>Value</th>      
                    </tr>
                </thead>
                <tbody>  
                    <tr>                
                        <th>Name</th>
                        <td>{props.name}</td>      
                    </tr>                  
                    <tr>                
                        <th>Username</th>
                        <td>{props.username}</td>      
                    </tr>
                    <tr>                
                        <th>Email</th>
                        <td>{props.email}</td>     
                    </tr>
                    <tr>                
                        <th>Phone Number</th>
                        <td>{props.phone}</td>     
                    </tr>
                    <tr>                
                        <th>Website</th>
                        <td>{props.website}</td>     
                    </tr>
                    <tr>                
                        <th>Address</th>
                        <td>{ ` ${props.address.suite}, ${props.address.street}, ${props.address.city}, ${props.address.zipcode} ` }</td>     
                    </tr>
                    <tr>                
                        <th>Company Name</th>
                        <td>{props.company.name}</td>     
                    </tr>
                    <tr>                
                        <th>Action</th>
                        <td><Button as={Link} to={"/blogs?userId="+props.id}>View Blogs</Button></td>     
                    </tr>
                </tbody>
            </Table>            
        </>
    );
}
export default View;         