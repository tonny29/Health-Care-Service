import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Contact = () => {
    const {signInWithGoogle,user}=UseAuth();
    console.log('user',user);
    return (
        <div className="btn-style" style={{color:"white"}}>
        <h2><FontAwesomeIcon icon={faUser} />Please Log In Frist</h2>
                <form onSubmit="">
                    <input type="email" placeholder='enter your mail' />
                    <br /><br />
                    <input type="password" placeholder='enter your password' />
                    <br /><br />
                    <input type="password" placeholder='re-enter your password' />
                    <br /><br />
                    <input type="submit" value='Ssubmit' />
                </form>
                <p>Already have an account?<Link to="/login">Login</Link></p>
                <button onClick={signInWithGoogle}>Google Sign In</button>
        </div>
    );
};

export default Contact;