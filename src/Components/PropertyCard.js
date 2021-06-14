import gsap from "gsap/gsap-core";
import React from "react";
import "../css/propertyCard.css";
function titleHover() {
  gsap.to("#title", { x: 50 });
}
function PropertyCard({ url, alt }) {
  return (
    <div className="propertyCard-container" onMouseEnter={titleHover}>
      <div className="propertyCard-Title" id="title">
        <h3>Property One</h3>
      </div>
      <img className="propertyCard-img" src={url} alt={alt} />
    </div>
  );
}

export default PropertyCard;
