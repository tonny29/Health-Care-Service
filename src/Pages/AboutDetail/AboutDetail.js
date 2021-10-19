import React from 'react';
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './AboutDetail.css';

const AboutDetail = (props) => {
    const {star,locationMap,hospital,address}=props.starAdd;
    console.log(star);
    return (
        <div className="style-add row">
            <Col lg={4}>
                <img src={locationMap} alt="" />
            </Col>
            <Col lg={8}>
                <div className="text-modify">
                <h4>{hospital}</h4>
                <Rating 
                initialRating={star}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"   
                readonly></Rating>
                <p>{address}</p>
                </div>
               
            </Col>
        </div>
    );
};

export default AboutDetail;