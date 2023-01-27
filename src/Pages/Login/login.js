import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./login.css";

function Login() {
  const navigate = useNavigate()
	const user = useSelector((state) => state.user.user);
  // React States
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(null);

  const errors = {
    uname: "Invalid Username",
    pass: "Invalid Password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = user.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
        setIsSubmitted(false);
      } else {
        setIsSubmitted(true);
        navigate("/dashboard", {state:{fullName: username}})
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
      setIsSubmitted(false);
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
  );

  return (
  <div className="App">
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title mt-3">Login</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input type="text" name="uname" value={username} 
            required className="form-control mt-1 shadow p-2 mb-1 rounded" placeholder="Enter username"
            onChange={(e)=> setUsername(e.target.value)}/>
            {renderErrorMessage("uname")}
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input type="password" name="pass" value={password} 
            required className="form-control mt-1 shadow p-2 mb-1 rounded" placeholder="Enter password"
            onChange={(e)=> setPassword(e.target.value)}/>
            {renderErrorMessage("pass")}
          </div>
          <div className="d-grid gap-2 mt-5">
            <button type="submit" className="btn w-100 mb-3 shadow p-2 mb-1 rounded" style={{backgroundColor: "#D4F8E4"}}>
                Login
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  );
}

export default Login;