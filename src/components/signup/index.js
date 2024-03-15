import React, { useState } from 'react';
import '../../stylesheets/signup/style.css';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        dateOfBirth: '',
        gender: '',
        address: {
            street: '',
            city: '',
            state: '',
            postalCode: '',
            country: ''
        },
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
            fetch('http//localhost:5000/signup',{
              method:'POST',
              headers:{
                'Content-Type': 'application/json'
              },
              body:JSON.stringify(formData)
            })
            alert('Registration successful!');
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <form className="form-signin" onSubmit={handleSubmit}>
            <div className="text-center mb-4">
                <h1 className="h3 mb-3 font-weight-normal">Registration</h1>
            </div>

            <div className="form-label-group">
                <input type="text" name="firstName" className="form-control" placeholder="First Name" required autoFocus onChange={handleChange} />
                <label htmlFor="firstName">First Name</label>
            </div>

            <div className="form-label-group">
                <input type="text" name="lastName" className="form-control" placeholder="Last Name" required onChange={handleChange} />
                <label htmlFor="lastName">Last Name</label>
            </div>

            <div className="form-label-group">
                <input type="email" name="email" className="form-control" placeholder="Email address" required onChange={handleChange} />
                <label htmlFor="email">Email address</label>
            </div>

            <div className="form-label-group">
                <input type="password" name="password" className="form-control" placeholder="Password" required onChange={handleChange} />
                <label htmlFor="password">Password</label>
            </div>

            {/* Additional fields go here */}

            <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
        </form>
    );
}

export default RegistrationForm;
