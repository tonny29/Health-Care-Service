import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import { Col } from 'react-bootstrap';
import './Login.css';

const Login = () => {
    const {signInWithGoogle}=UseAuth();
    // console.log(user);
    return (
        <div className="btn-style login-style row">
             <Col lg={6}>
             </Col>   
                <Col lg={6}>
                  
                  <div className="input">
                  <h2>Login</h2>
                    <input type="email" placeholder='Enter your email'/>
                    <br /><br />
                    <input type="password" placeholder='Enter your password'/>
                    <br /><br />
                    <input type="submit" value="Submit"/>
                    <p>haven't any account?<Link to='/contact'>Create Account</Link></p>
                
                    <br /><br />
                    <button onClick={signInWithGoogle} className="button-style"><i class="fab fa-google"></i>{' '}Google Sign In</button>
                  </div>
               
                </Col>
            </div>
    );
};

export default Login;