import React from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="auth-container signup-bg">
      <div className="auth-box">
        <h2>Create Account</h2>
        <input type="text" placeholder="Enter Username" />
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
        <button className="auth-btn">Signup</button>
        <p>Already have an account?</p>
        <button className="switch-btn" onClick={() => navigate("/login")}>
          Go to Login
        </button>
      </div>
    </div>
  );
}

export default Signup;
