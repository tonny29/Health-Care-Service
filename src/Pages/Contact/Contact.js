import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import './Contact.css';


const Contact = () => {
    // ----------------useauth------------------ \\
    const {signInWithGoogle,user}=UseAuth();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const [success,setSuccess]=useState('');
    console.log(email,password);
    // emailHandlar\\
    const emailHandlar=(e)=>{
        const email=e.target.value;
        setEmail(email);
        
    }
    // PasswordHandlar\\
    const passwordHandlar=(e)=>{
        const password=e.target.value;
        setPassword(password);
    }

    // Registration Handlar \\
    const registrationHandlar=(e)=>{
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setSuccess("SuccessFully Regitration,Please Login Now");
            const user = result.user;
            console.log(user);
        })
        .catch((error) => {
            const message = error.message;
            setError(message);
        });
        
    }
    return (
        <div className="btn-style contact-style row">
            <Col lg={6}>
            </Col>
                <Col lg={6}>
                    
                        <div className="input">
                        <form onSubmit={registrationHandlar}>
                            <h2>Please Sign In </h2>
                            <label htmlFor="frist"></label>
                            <p><input type="name" placeholder=' frist name'id="frist"/></p>

                            <label htmlFor="last"></label>
                            <p><input type="email" placeholder='last name' id="last" /></p>

                            <label htmlFor="mail"></label>
                            <p><input onChange={emailHandlar} type="email" placeholder='enter your email' id="mail" required/></p>

                            <label htmlFor="password"></label>
                            <p><input onChange={passwordHandlar} type="password" placeholder='enter your password' id="password" required/></p>
                            <p><input type="password" placeholder='re-enter your password' required/></p>
                            <br />
                            <input type="submit" value='Submit' />
                            <br />
                            <p className="text-success">{success}</p>
                            <p className="text-danger">{error}</p>
                        </form>
                        <p>Already have an account?<Link to="/login">Login</Link></p>
                        <button onClick={signInWithGoogle}><i class="fab fa-google"></i>{' '}Google Sign In</button>
                        </div>
                    
                
                </Col>
        </div>
    );
};

export default Contact;