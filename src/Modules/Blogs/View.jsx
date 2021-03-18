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
                        <th>Author</th>
                        <td>{ props.user.filter(user => user.id === props.userId).map(user => user.name) }</td>      
                    </tr>
                    <tr>
                        <th>Title</th>
                        <td>{props.title}</td>      
                    </tr>
                    <tr>                
                        <th>Body</th>
                        <td>{props.body}</td>
                    </tr>
                    {
                        (props.viewEnable) ? 
                        <tr>                
                            <th>Action</th>
                            <td><Button as={Link} to={'/blogs/'+props.id} variant="info"><i className="fa fa-eye"></i></Button></td>
                        </tr> : <></>
                    }
                </tbody>
            </Table>            
        </>
    );
}
export default View;         