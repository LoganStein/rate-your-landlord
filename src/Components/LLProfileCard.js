import React from "react";
import "../css/LLProfileCard.css";
import Stars from "../Components/Stars";
import { Link } from "react-router-dom";
// use lots of props to get data from firebase or something.
function LLProfileCard({
  name,
  location,
  rating = 0,
  picURL,
  propertyNum = 1,
  usersRating,
}) {
  return (
    <Link to="/Landlord">
      <div className="LLProfileCard-container">
        <img src={picURL} alt="profile pic" />
        <h3>{name}</h3>
        <p>
          {propertyNum} {propertyNum > 1 ? "Properties" : "Property"} in{" "}
          {location}
        </p>
        {usersRating ? <h4>Average Rating:</h4> : null}
        <Stars rating={rating} />
        {usersRating ? <h4>Your Average Rating:</h4> : null}
        {usersRating ? <Stars rating={usersRating} /> : null}
      </div>
    </Link>
  );
}

export default LLProfileCard;
