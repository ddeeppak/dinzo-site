import React, { useState } from 'react';

import '../../stylesheets/signup/style.css';

const SignupForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container">
      <header>Signup Form</header>
      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="step">
          <p>Name</p>
          <div className="bullet">
            <span>1</span>
          </div>
        </div>
        <div className="step">
          <p>Contact</p>
          <div className="bullet">
            <span>2</span>
          </div>
        </div>
        <div className="step">
          <p>Birth</p>
          <div className="bullet">
            <span>3</span>
          </div>
        </div>
        <div className="step">
          <p>Submit</p>
          <div className="bullet">
            <span>4</span>
          </div>
        </div>
      </div>
      {/* Form */}
      <div className="form-outer">
        <form onSubmit={handleSubmit}>
          {/* Page 1: Basic Info */}
          {step === 1 && (
            <div className="page slide-page">
              <div className="title">Basic Info:</div>
              <div className="field">
                <div className="label">First Name</div>
                <input type="text" />
              </div>
              <div className="field">
                <div className="label">Last Name</div>
                <input type="text" />
              </div>
              <div className="field">
                <button className="firstNext next" onClick={nextStep}>Next</button>
              </div>
            </div>
          )}
          {/* Page 2: Contact Info */}
          {step === 2 && (
            <div className="page">
              <div className="title">Contact Info:</div>
              <div className="field">
                <div className="label">Email Address</div>
                <input type="text" />
              </div>
              <div className="field">
                <div className="label">Phone Number</div>
                <input type="Number" />
              </div>
              <div className="field btns">
                <button className="prev-1 prev" onClick={prevStep}>Previous</button>
                <button className="next-1 next" onClick={nextStep}>Next</button>
              </div>
            </div>
          )}
          {/* Page 3: Date of Birth */}
          {step === 3 && (
            <div className="page">
              <div className="title">Date of Birth:</div>
              <div className="field">
                <div className="label">Date</div>
                <input type="text" />
              </div>
              <div className="field">
                <div className="label">Gender</div>
                <select>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="field btns">
                <button className="prev-2 prev" onClick={prevStep}>Previous</button>
                <button className="next-2 next" onClick={nextStep}>Next</button>
              </div>
            </div>
          )}
          {/* Page 4: Login Details */}
          {step === 4 && (
            <div className="page">
              <div className="title">Login Details:</div>
              <div className="field">
                <div className="label">Username</div>
                <input type="text" />
              </div>
              <div className="field">
                <div className="label">Password</div>
                <input type="password" />
              </div>
              <div className="field btns">
                <button className="prev-3 prev" onClick={prevStep}>Previous</button>
                <button className="submit" type="submit">Submit</button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
