import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Sevice.css';
const Service = (props) => {
    const {name,cost,image,description}=props.serviceAre
    return (
        <div className="btn-style">
          <Col>
              <Card>
              <Card.Img variant="top" src={image}/>
              <Card.Body>
              <Card.Title>Name Of Service : {name}</Card.Title>
              <p>{description}</p>
              <h4>Cost : ${cost}</h4>
              <Button>More Details</Button>
              </Card.Body>
              </Card>
          
          </Col>
        </div>
    );
};

export default Service;