import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Button, Row, Card, Col } from 'react-bootstrap';
import { Helmet } from "react-helmet";


const Home = ({match}) => {
  
  const [min_max, setMinMax] = useState({});

  const calculate = (array) => {
       
      var sum = array[0], min = array[0], max = array[0];
          
      for (let i = 1; i < array.length; i++) {
          sum += array[i];
          if (min > array[i]) min = array[i];
          if (max < array[i]) max = array[i];
      }  
      setMinMax({
        min: sum - max, 
        max: sum - min
      });
  }
  useEffect(() => {

    calculate([1, 3, 5, 7, 9]);    

  }, []);

    return (
      <>     
        <Helmet>
          <title>Dashboard - Home</title>
        </Helmet>
        <Row>
          <Col md={12} className="d-flex justify-content-md-center flex-row bd-highlight mb-3">
            <div className="p-2 bd-highlight">Minimum Sum Total = <b>{min_max.min}</b></div>
            <div className="p-2 bd-highlight">Maximum Sum Total = <b>{min_max.max}</b></div>            
          </Col>
            <Col md={12} className="d-flex justify-content-md-center">
              <Card style={{ width: '18rem', margin: "15px" }}>
                <Card.Img variant="top" src="/img/user-list.png" style={{ height: "286px" }}/>
                <Card.Body>
                  <Button as={Link} to="/users" variant="primary">User Managment</Button>
                </Card.Body>
              </Card>
            
              <Card style={{ width: '18rem', margin: "15px" }}>
                <Card.Img variant="top" src="/img/content-blogging.webp" />
                <Card.Body>
                  <Button as={Link} to="/users" variant="primary">Blog Managment</Button>
                </Card.Body>
              </Card>
            </Col>
        </Row>           
      </>
    );
}

export default Home;
