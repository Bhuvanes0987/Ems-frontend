import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../styles/login.css';


const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const toggleForm = () => {
        setIsSignIn(prevState => !prevState);
    };

    return (
        <div className={`container ${isSignIn ? '' : 'active'}`} id="container">
            <div className={`form-container ${isSignIn ? 'sign-in' : 'sign-up'}`}><h1 id='logo'>DataStore</h1>
                <form>
                    <h1>{isSignIn ? 'Sign In' : 'Create Account'}</h1>
                    {/* <div className="social-icons">
                        <a href="#" className="icon"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                        <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div> */}
                    <span>{isSignIn ? 'or use your email password' : 'or use your email for registration'}</span>
                    {!isSignIn && <input type="text" placeholder="Name" required />}
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    {isSignIn ? (
                        <>
                            <a href="#">Forget Your Password?</a>
                            <button type="submit" >Sign In</button>
                        </>
                    ) : (
                        <button type="submit" href="Login.jsx">Sign Up</button>
                    )}
                </form>
            </div>
            <div className="toggle-container" onClick={toggleForm}>
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        {isSignIn ? (
                            <>
                                <h1>Welcome Back!<p>Click me for</p></h1><h3>REGISTRATION</h3>
                            </>
                        ) : null}
                    </div>
                    <div className="toggle-panel toggle-right">
                        {!isSignIn ? (
                            <>
                                <h1>Hello, Friend!<p>Click me for </p></h1> <h3>LOGIN</h3>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
