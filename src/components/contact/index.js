import React, { useState } from 'react';

import '../../stylesheets/style.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log(formData);
        // Clear form fields after submission if needed
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="contact-form">
            <form id="contactForm" onSubmit={handleSubmit} noValidate>
                <div className="control-group">
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="control-group">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="control-group">
                    <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="control-group">
                    <textarea
                        className="form-control"
                        rows="6"
                        id="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div>
                    <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};



const Contact = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-7 mb-5">
                    <ContactForm />
                </div>
                <div className="col-lg-5 mb-5">
                    <h5 className="font-weight-semi-bold mb-3">Get In Touch</h5>
                    <p>Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et erat clita ipsum justo sed.</p>
                    <div className="d-flex flex-column mb-3">
                        <h5 className="font-weight-semi-bold mb-3">Store 1</h5>
                        <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>Vardhaman college, hyd</p>
                        <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                        <p className="mb-2"><i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
                    </div>
                    <div className="d-flex flex-column">
                        <h5 className="font-weight-semi-bold mb-3">Store 2</h5>
                        <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>Vardhaman college, hyd</p>
                        <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                        <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

