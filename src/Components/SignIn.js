import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/SignIn.css";

function SignIn() {
  const [signedIn, setSignedIn] = useState(false);
  let register = (
    <Link to="/SignUp">
      <div className="signUpBTN">
        <p>Register</p>
      </div>
    </Link>
  );
  let dashboard = (
    <Link to="/Dashboard">
      <div className="signUpBTN">
        <p>Dashboard</p>
      </div>
    </Link>
  );
  return (
    <div className="login-container">
      {signedIn ? dashboard : register}
      <div
        className="signInBTN"
        onClick={() => {
          signedIn ? setSignedIn(false) : setSignedIn(true);
        }}
      >
        {signedIn ? <p>Sign Out</p> : <p>Sign In</p>}
      </div>
    </div>
  );
}

export default SignIn;
