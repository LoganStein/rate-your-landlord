import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

function getUnfilled(rating) {
  if (rating) {
    let x = 5 - rating;
    return x;
  } else {
    return 5;
  }
}

function Stars({ rating }) {
  return (
    <div>
      <div className="rating">
        {Array(rating)
          .fill()
          .map((_, i) => {
            return <StarIcon style={{ color: "rgb(240, 193, 75)" }} />;
          })}
        {Array(getUnfilled(rating))
          .fill()
          .map((_, i) => {
            return <StarBorderIcon style={{ color: "rgb(240, 193, 75)" }} />;
          })}
      </div>
    </div>
  );
}

export default Stars;
