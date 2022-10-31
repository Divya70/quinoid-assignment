import React from "react";
import "./components.css";
import { Link } from "react-router-dom";
const WarnModal = ({ closeModal }) => {
  return (
    <div className="modal-sec">
      <div className="cross-modal" onClick={() => closeModal(false)}>
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div className="warn-icon">
        <i className="fa-solid fa-triangle-exclamation warn-red-icon"></i>
        <b className="warn-title">Warning</b>
        <p className="warn-title">are you sure, you want to submit the exam?</p>
        <Link to="/result" className="continue-btn">
          <button>continue</button>
        </Link>
      </div>
    </div>
  );
};

export { WarnModal };
