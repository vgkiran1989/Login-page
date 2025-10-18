import React from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="auth-container login-bg">
      <div className="auth-box">
        <h2>Login</h2>
        <input type="text" placeholder="Enter Username" />
        <input type="password" placeholder="Enter Password" />
        <button className="auth-btn">Login</button>
        <p>Don’t have an account?</p>
        <button className="switch-btn" onClick={() => navigate("/")}>
          Go to Signup
        </button>
        <button className="home-btn" onClick={() => navigate("/home")}>
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default Login;
