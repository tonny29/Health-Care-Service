import React, { useEffect, useState } from 'react';
import { Col,Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    const [service,setService]=useState([]);
    useEffect(()=>{
        fetch('./services.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    // console.log(service);
    return (
        <div>
            <div className="hospital-banner btn-style row">
                    <Col lg={4}></Col>
                    <Col lg={8}>
                    <h1>CENTRAL HOSPITAL</h1>
                    <p>Our hospital benefits are insurance benefits that provide coverage for expenses associated with visiting a hospital for health care.These expenses can include things like room and board, medical treatments, medical supplies, etc. Without hospital benefits, hospital visits are extremely expensive.We provide care that is respectful of the <br />   patient's needs and preferences, and allow the values to guide care decisions, is a cornerstone of high-quality healthcare Safe.Healthcare providers have prioritize our patient's safety in every interaction.</p>
                    <button>About More</button>{' '}
                    <button>Contact Us</button>
                    </Col>
                
           </div>
            <div className="m-3">
             <Row>
                <Col md={3}>
                   <div className="side-banner">
                       <img src="https://previews.123rf.com/images/kurhan/kurhan1302/kurhan130200013/17658021-family-doctor-woman-and-a-group-of-happy-people.jpg" alt="" />
                    <div className="side-text">
                        <h4>We Provide The Best Medical Care For Your Family </h4>
                    </div>
                    <img src="https://st2.depositphotos.com/1000816/11846/i/950/depositphotos_118460772-stock-photo-doctor-and-happy-family.jpg" alt="" />
                   </div>
                </Col>
                <Col md={9}>
                <Row xs={1} md={3} className="g-2  card-style">
                    {
                        service.map(service=><Service serviceAre={service}></Service>)
                    }
                </Row>
                </Col>
             </Row>
        </div>
        </div>
    );
};

export default Home;