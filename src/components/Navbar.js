import React from "react";
import { useData } from "../context/DataContext";
import "./components.css";
const Navbar = () => {
  const { category } = useData();
  return (
    <div className="navbar-cont">
      <div className="Logo">
        <div className="footer-small">
          <img
            src="https://media.istockphoto.com/photos/blue-question-mark-icon-sign-or-ask-faq-answer-solution-and-support-picture-id1337010655?s=2048x2048"
            alt="img-name"
          />
          CLINICAL
        </div>
        <b>SCHOLAR</b>
      </div>
      <div className="test-category">EXAM CATEGORY: {category}</div>
      <div className="icons">
        <i className="fa-regular fa-bell nav-icon"></i>
        <i className="fa-solid fa-caret-down nav-icon"></i>
      </div>
    </div>
  );
};

export { Navbar };
