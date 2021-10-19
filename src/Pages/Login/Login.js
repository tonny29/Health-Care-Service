import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const Login = () => {
    const {signInWithGoogle}=UseAuth();
    return (
        <div className="btn-style" style={{color:"white"}}>
                <h2>Login</h2>
                <form>
                    <input type="email" placeholder='Enter your email'/>
                    <br /><br />
                    <input type="password" placeholder='Enter your password'/>
                    <br /><br />
                    <input type="submit" value="Submit"/>
                </form>
                <p>haven't any account?<Link to='/contact'>Create Account</Link></p>
                <div>---------------or---------------</div>
                <br /><br />
                <button onClick={signInWithGoogle} className="button-style">Goole Sign In</button>
            </div>
    );
};

export default Login;