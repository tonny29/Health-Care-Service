import React from 'react';

import {  Card, Col } from 'react-bootstrap';
const Services = (props) => {
    const {serName,serImg,serDes,serCost}=props.servicesLoad;
    return (
        <div>
            <Col>
              <Card>
              <Card.Img variant="top" src={serImg}/>
              <Card.Body>
              <Card.Title>Service Name : {serName}</Card.Title>
              <p>{serDes}</p>
              <h4>Minimun-Cost : ${serCost}</h4>
              </Card.Body>
              </Card>
          
          </Col>
            
        </div>
    );
};

export default Services;