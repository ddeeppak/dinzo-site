import React, { useState } from 'react';
import '../../stylesheets/login/style.css';

const Login = () => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');

    const url = "https://dinzo-api.onrender.com"; // Define your API URL here

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

            const data = await response.json();
            
            if (response.ok) {
                console.log(data);
                localStorage.setItem("Token", data.Token);
                window.alert("Login Successfully");
            } else if (response.status === 404) {
                window.alert("Username or password incorrect");
            } else {
                console.error('Error:', data);
                window.alert("An error occurred. Please try again later."); // Show a generic error message
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error appropriately (e.g., show error message to the user)
        }
    };

    return (
        <>
            <div className='loginlayout'>
                <h1>Login</h1>
                <form>
                    <br />
                    <p>Username Or Email</p>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter your Username or Email"
                        value={emailOrPhone} // Change to emailOrPhone
                        onChange={(e) => setEmailOrPhone(e.target.value)}
                    />
                    <p>Password</p>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button type="button" onClick={handleSubmit}> {/* Change to handleSubmit */}
                        Login
                    </button>
                </form>
            </div>
        </>
    );
};

export default Login;
