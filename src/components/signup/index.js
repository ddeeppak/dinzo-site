import React, { useState } from 'react';
import '../../stylesheets/signup/style.css';


const SignupForm = () => {
  const [current, setCurrent] = useState(1);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onSubmit = () => {
    alert("Your Form Successfully Signed up");
    setCurrent(1); // Reset the form after submission
  };

  return (
  <>
    <div className="container">
      <header>Signup Form</header>
      <div className="progress-bar">
        <div className="step">
          <p className={current >= 1 ? "active" : ""}>Name</p>
          <div className={`bullet ${current >= 1 ? "active" : ""}`}>
            <span>1</span>
          </div>
          <div className={`check fas fa-check ${current >= 1 ? "active" : ""}`}></div>
        </div>
        <div className="step">
          <p className={current >= 2 ? "active" : ""}>Contact</p>
          <div className={`bullet ${current >= 2 ? "active" : ""}`}>
            <span>2</span>
          </div>
          <div className={`check fas fa-check ${current >= 2 ? "active" : ""}`}></div>
        </div>
        <div className="step">
          <p className={current >= 3 ? "active" : ""}>Birth</p>
          <div className={`bullet ${current >= 3 ? "active" : ""}`}>
            <span>3</span>
          </div>
          <div className={`check fas fa-check ${current >= 3 ? "active" : ""}`}></div>
        </div>
        <div className="step">
          <p className={current >= 4 ? "active" : ""}>Submit</p>
          <div className={`bullet ${current >= 4 ? "active" : ""}`}>
            <span>4</span>
          </div>
          <div className={`check fas fa-check ${current >= 4 ? "active" : ""}`}></div>
        </div>
      </div>
      <div className="form-outer">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={`page slide-page ${current === 1 ? "active" : ""}`}>
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
              <button className="firstNext next" onClick={next}>Next</button>
            </div>
          </div>
          <div className={`page ${current === 2 ? "active" : ""}`}>
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
              <button className="prev-1 prev" onClick={prev}>Previous</button>
              <button className="next-1 next" onClick={next}>Next</button>
            </div>
          </div>
          <div className={`page ${current === 3 ? "active" : ""}`}>
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
              <button className="prev-2 prev" onClick={prev}>Previous</button>
              <button className="next-2 next" onClick={next}>Next</button>
            </div>
          </div>
          <div className={`page ${current === 4 ? "active" : ""}`}>
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
              <button className="prev-3 prev" onClick={prev}>Previous</button>
              <button className="submit" onClick={onSubmit}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </>
  );
};

export default SignupForm;
