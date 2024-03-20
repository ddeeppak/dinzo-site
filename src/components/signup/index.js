import React, { useState } from 'react';
import '../../stylesheets/signup/style.css';

const url = 'https://dinzo-api.onrender.com';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
            const response = await fetch(url+'/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Registration successful!');
                window.location.href = '/login'; // Redirect to login page after successful registration
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
        } catch (error) {
            console.error('Registration failed:', error);
            alert('Registration failed: ' + error.message);
        }
    };

    return (
        <div className='loginlayout'>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" className="form-control" placeholder="First Name" required autoFocus onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" className="form-control" placeholder="Last Name" required onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" name="phoneNumber" className="form-control" placeholder="Phone Number" required onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" name="email" className="form-control" placeholder="Email address" required onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Password" required onChange={handleChange} />
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegistrationForm;
