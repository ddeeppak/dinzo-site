import React, { useState } from 'react';

import '../../stylesheets/login/style.css';
const url = 'https://dinzo-api.onrender.com';

const LoginForm = () => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch(url+"/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json" // Fixed Content-Type header
                },
                body: JSON.stringify({
                    email: emailOrPhone,
                    password: password
                })
            });

            const data = await response.json(); // Convert response to JSON

            console.log(data);
            localStorage.setItem("Token",data.Token);
            
            window.alert("Login SuccessFully");
        } catch (error) {
            console.error('Error:', error);
            // Handle error appropriately (e.g., show error message to the user)
        }
    };

    return (
        <>
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
        </>
    );
};

export default LoginForm;
