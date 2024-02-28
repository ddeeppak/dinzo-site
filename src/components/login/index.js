import React from 'react';
import { useState } from 'react';

import Navigation from '../navigation';
import Footer from '../footer';
import Support from '../support';
import '../../stylesheets/login/style.css';
const LoginForm = () => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
    };

    return (
        <>
            <Support />
            <Navigation />
            <div className="container">
                <div className="wrapper">
                    <div className="title"><span>Login Form</span></div>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <input
                                type="text"
                                placeholder="Email or Phone"
                                value={emailOrPhone}
                                onChange={(e) => setEmailOrPhone(e.target.value)}
                                required
                            />
                        </div>
                        <div className="row">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="pass"><a href="#">Forgot password?</a></div>
                        <div className="row button">
                            <input type="submit" value="Login" />
                        </div>
                        <div className="signup-link">Not a member? <a href="#">Signup now</a></div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default LoginForm;
