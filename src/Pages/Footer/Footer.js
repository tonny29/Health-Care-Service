import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faPhone,faMailBulk,faMapMarkerAlt,faTaxi,faQuestionCircle,faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-style row">
            {/* <p>Central Medical Hospital . centralhospita@gmail.com  uttara-1230</p> */}
            <Col lg={4}>
                <h4><FontAwesomeIcon icon={faHome}/>{' '}CENTRAL HOSPITAL</h4>
                <p><FontAwesomeIcon icon={faMapMarkerAlt}/>{' '}House 01, Road 07 Jashim <br /> Uddin Over Bridge Open 24 hours</p>
                <p><FontAwesomeIcon icon={faPhone}/>{' '}02334455667 <br /> 028874646329 </p>
                <p><FontAwesomeIcon icon={faMailBulk}/>{' '}centralhospital@gmail.com</p>
            </Col>
            <Col lg={4}>
                <h4><FontAwesomeIcon icon={faTaxi}/>{' '}AMBULANCE NUMBER</h4>
                <p><FontAwesomeIcon icon={faPhone}/>{' '}023748567120</p>
                <p><FontAwesomeIcon icon={faPhone}/>{' '}026773540089</p>
                <p><FontAwesomeIcon icon={faPhone}/>{' '}023247894577</p>
            </Col>
            <Col lg={4}>
                <h5><FontAwesomeIcon icon={faQuestionCircle}/>{' '}INFORMATION</h5>
                <p><FontAwesomeIcon icon={faInfoCircle}/>{' '}About Us</p>
                <p><FontAwesomeIcon icon={faHome}/>{' '}Our Other Hospital Address</p>
                <p><FontAwesomeIcon icon={faTaxi}/>{' '}Our Services System</p>
            </Col>
        </div>
    );
};

export default Footer;