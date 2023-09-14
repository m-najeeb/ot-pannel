import React, { useState, useContext } from "react";
import Frame from "../assets/Frame.png";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";
import "./AdminLogin.css";
import { LoginContext } from "../context/LoginContext";

function AdminLogin() {
  const { email, setEmail, password, setPassword } = useContext(LoginContext);
  const [isVisible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!isVisible);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="admin-container">
        <div className="left-container">
          <form action="post">
            <div className="admin-login">Admin Login</div>
            <div className="email-container">
              <label htmlFor="email" className="email-label">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                className="email-input form-control"
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="password-container">
              <label htmlFor="password" className="password-label">
                Password
              </label>
              <input
                id="password"
                className="password-input form-control"
                name="password"
                onChange={handlePasswordChange}
                value={password}
                required
                type={isVisible ? "text" : "password"}
              />
              <span className="eye-icon" onClick={toggle}>
                {!isVisible ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
              </span>
            </div>
            <div>
              <button type="submit" className="submit-btn mt-3" id="">
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div className="right-container">
          <img src={Frame} alt="img" className="rounded mx-auto d-block" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default AdminLogin;
