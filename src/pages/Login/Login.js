import React, { useState, useEffect } from "react";
import "./login.css";
import "../css/style.css";
import { Link, useNavigate } from "react-router-dom";
import data from "../../sampleData.json";
import { useData } from "../../context/DataContext";
const Login = () => {
  const initialValue = { email: "", password: "" };
  const [loginValues, setLoginValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const { category, setCategory } = useData();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginValues({ ...loginValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(loginValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      localStorage.setItem("user", JSON.stringify(loginValues));
      navigate("/test");
    }
  }, [formErrors, loginValues, isSubmit, navigate]);
  useEffect(() => {
    const getSignupData = JSON.parse(localStorage.getItem("user")) || {};
    setLoginValues(getSignupData);
  }, []);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s$]+@[^\s@]+\.[^\s@]{2,}$/i;
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
  const testUserCredential = {
    email: "testuser@gmail.com",
    password: "testuser@2021",
  };
  const testCredential = (e) => {
    e.preventDefault();
    setLoginValues(testUserCredential);
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
            <h3 className="login-heading">User Login</h3>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              onChange={handleChange}
              value={loginValues.email}
            />
            <p className="warning-input-field">{formErrors.email}</p>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleChange}
              value={loginValues.password}
            />
            <p className="warning-input-field">{formErrors.password}</p>
            <button type="button" className="login-btn" onClick={handleSubmit}>
              Login
            </button>
            <button
              type="button"
              className="login-btn"
              onClick={testCredential}
            >
              Login With Test Credential
            </button>
          </form>
          <div>
            Select Subject
            <select
              className="dropdown"
              onClick={(e) => setCategory(e.target.value)}
            >
              <option>sports</option>
              <option>arts</option>
              <option>history</option>
              <option>physics</option>
              <option>science</option>
            </select>
          </div>
          <p className="para">
            Not Created Account Yet? <Link to="./signup">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export { Login };
