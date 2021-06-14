import React from "react";
import "../css/PFP.css";

function ProfileCircle({ url = "" }) {
  return (
    <div className="PFP-container">
      <img className="PFP-img" src={url} />
    </div>
  );
}

export default ProfileCircle;
