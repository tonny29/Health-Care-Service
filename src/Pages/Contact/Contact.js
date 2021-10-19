import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import { Link } from 'react-router-dom';

import { Col } from 'react-bootstrap';
import './Contact.css';


const Contact = () => {
    const {signInWithGoogle,user}=UseAuth();
    console.log('user',user);
    return (
        <div className="btn-style contact-style row">
            <Col lg={6}>
            </Col>
                <Col lg={6}>
                <div>
                    <div className="input">
                    <h2>Please Sign In </h2>
                    <p>Email: <input type="email" placeholder='enter your mail' /></p>
                    <p>Password: <input type="password" placeholder='enter your password' /></p>
                    <p>Re-enter:<input type="password" placeholder='re-enter your password' /></p>
                    <br />
                    <input type="submit" value='Submit' />
                    <p>Already have an account?<Link to="/login">Login</Link></p>
                    <button onClick={signInWithGoogle}><i class="fab fa-google"></i>{' '}Google Sign In</button>
                    </div>
                    </div>
               
                </Col>
        </div>
    );
};

export default Contact;