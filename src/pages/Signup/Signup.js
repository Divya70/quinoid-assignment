import React, { useEffect, useState } from "react";
import "./signup.css";
import "../css/style.css";
import { useNavigate, Link } from "react-router-dom";
const Signup = () => {
  const initialValue = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    console.log("lfkjgfkhgfk");
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      localStorage.setItem("user", JSON.stringify(formValues));
      navigate("/");
    }
  }, [formErrors, formValues, isSubmit, navigate]);
  useEffect(() => {
    const getSignupData = JSON.parse(localStorage.getItem("user")) || {};

    setFormValues(getSignupData);
  }, []);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s$]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters!";
    } else if (values.password.length > 15) {
      errors.password = "Password can not exceed more than 10 characters!";
    }
    return errors;
  };
  return (
    <div className="login-sec">
      <div className="login-image">
        <div className="title">
          <div className="footer-name">CLINICAL</div>
          <b>SCHOLAR</b>
        </div>
      </div>
      <div className="login-cont">
        <div className="login-fields">
          <form>
            <h3 className="login-heading">User Signup</h3>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
            <p className="warning-input-field">{formErrors.username}</p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
            <p className="warning-input-field">{formErrors.email}</p>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
            <p className="warning-input-field">{formErrors.password}</p>
            <button type="button" onClick={handleSubmit} className="login-btn">
              Signup
            </button>
          </form>
          <div>
            <p className="para">
              Already have an Account? <Link to="/">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Signup };
