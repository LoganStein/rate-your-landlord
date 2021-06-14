import React from "react";
import "../css/nav.css";
import Search from "./Search";
import SignIn from "./SignIn";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <h1>RYLL</h1>
      </Link>
      <Search />
      <SignIn />
    </div>
  );
}

export default Nav;
