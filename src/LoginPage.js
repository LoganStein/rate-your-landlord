import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./css/loginPage.css";

function LoginPage() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    //   firebase auth stuff when I get to it.
    history.push("/");
  };

  return (
    <div className="signIn-container">
      <h3>Sign In</h3>
      <input
        placeholder="Username"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={signIn} type="submit">
        Sign In
      </button>
    </div>
  );
}

export default LoginPage;
