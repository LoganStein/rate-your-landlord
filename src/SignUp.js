import React from "react";
import Nav from "./Components/Nav";
import "./css/SignUpPage.css";

function SignUp() {
  return (
    <div className="Register-container">
      <Nav />
      <center>
        <h1>Register</h1>
      </center>
      <div className="form-container">
        <div className="input-line">
          <input className="half-input" placeholder="First Name" />
          <input className="half-input" placeholder="Last Name" />
        </div>
        <div className="input-line">
          <input placeholder="Email" />
        </div>
        <div className="input-line">
          <input placeholder="Address" />
        </div>
        <input placeholder="Address Line 2" />
        <input placeholder="City" />
        <input placeholder="State" />
        <input placeholder="Zip code" />
      </div>
    </div>
  );
}

export default SignUp;
