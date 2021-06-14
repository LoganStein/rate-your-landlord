import React, { useEffect, useState } from "react";
import "../css/newReview.css";
import StarsToRate from "./StarsToRate";

function NewReview() {
  return (
    <div className="new-review">
      <div className="top-row">
        <StarsToRate />
        <select>
          <option>Maintenance</option>
          <option>Responsiveness</option>
          <option>Property Quality</option>
          <option>Other</option>
        </select>
      </div>
      <textarea placeholder={"Write your next review"} />
    </div>
  );
}

export default NewReview;
