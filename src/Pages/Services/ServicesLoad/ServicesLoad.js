import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Services from '../Services';
import './ServicesLoad.css';

const ServicesLoad = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('./services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
             <h1 style={{color:"white"}}>(+) Our Hospitality Services Near By You (+)</h1>
            <div className="services-name row">
                <Col col-lg-4>
                    <p>short-term hospitalization</p>
                    <p>emergency room services</p>
                </Col>
                <Col col-lg-4>
                    <p>general and specialty surgical services</p>
                    <p>x ray/radiology services</p>
                </Col>
                <Col col-lg-4>
                    <p>laboratory services</p>
                    <p>blood services</p>
                </Col>
                
            </div>
            <div className="all-services">
                <Row xs={1} md={3} className="g-4  card-style">
                    {
                        services.map(services=><Services servicesLoad={services}></Services>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default ServicesLoad;