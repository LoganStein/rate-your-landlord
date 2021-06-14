import React from "react";
import "../css/rating.css";
import Stars from "./Stars";

function Rating({ rating }) {
  return (
    <div className="rating-container">
      <div className="rating-head">
        <div className="rating-head-text">
          <div className="rating-head-property">
            <h4>Review Header</h4>
            <p>(Property One)</p>
          </div>
          <p>By User</p>
        </div>
        <Stars rating={rating} />
      </div>
      <div className="rating-text">
        <p>
          Cillum consectetur qui nulla excepteur aliquip do sit exercitation
          nostrud Lorem amet. Qui anim laboris ullamco sint irure do adipisicing
          in nostrud nulla culpa culpa sit officia. Do enim aliquip et sint.
          Adipisicing dolor reprehenderit minim consectetur. Ea in pariatur
          eiusmod aliquip ullamco consectetur incididunt exercitation ex eu
          consequat cillum tempor. Fugiat dolore excepteur aute adipisicing
          deserunt nostrud eiusmod deserunt nisi aliqua. Fugiat reprehenderit
          exercitation Lorem mollit ullamco laboris ea.
        </p>
      </div>
    </div>
  );
}

export default Rating;
