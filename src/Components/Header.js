import React from "react";
import "../css/Header.css";
import LLProfileCard from "./LLProfileCard";

function Header() {
  return (
    <div className="hero-container">
      <div className="jumbo-heading">
        <h1>Rate Your Landlord</h1>
        <p>Check your landlord's social credit</p>
      </div>
      <div className="LLProfile-Card">
        <LLProfileCard
          name={"Logan Stein"}
          location={"Chicago"}
          picURL={"https://avatars.githubusercontent.com/u/16550375?v=4"}
          rating={4}
          propertyNum={3}
        />
      </div>
      <div className="regular-heading">
        <p>Landlords screen their tenants now you can screen your landlord</p>
      </div>
    </div>
  );
}

export default Header;
