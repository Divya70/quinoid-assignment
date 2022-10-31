import React from "react";
import "./components.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-sec">
      <div className="footer-cont">
        <div className="Logo">
          <div className="footer-small">
            <img
              src="https://media.istockphoto.com/photos/blue-question-mark-icon-sign-or-ask-faq-answer-solution-and-support-picture-id1337010655?s=2048x2048"
              alt="img-name"
            />
            CLINICAL
          </div>
          <div className="footer-large">SCHOLAR</div>
        </div>

        <ul>
          <li>
            <Link to="https://www.facebook.com/QUINOID/">
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <li>
              <Link to="https://twitter.com/QuinoidBS">
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/company/quinoid-business-solutions/">
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/company/quinoid-business-solutions/">
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
            </li>
          </li>
        </ul>
      </div>
      <p className="para">
        © Copyright Clinical Scholor | Powered by Quinoid Bussiness Solutions
      </p>
    </div>
  );
};

export { Footer };
