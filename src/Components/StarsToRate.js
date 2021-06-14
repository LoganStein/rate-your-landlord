import React, { useState } from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Stars from "./Stars";

function StarsToRate() {
  const [Star1Hovered, setStar1Hovered] = useState(false);
  const [Star2Hovered, setStar2Hovered] = useState(false);
  const [Star3Hovered, setStar3Hovered] = useState(false);
  const [Star4Hovered, setStar4Hovered] = useState(false);
  const [Star5Hovered, setStar5Hovered] = useState(false);
  const [locked, setLocked] = useState(0);

  function hovering() {
    return (
      <div>
        {Star1Hovered ? (
          <StarIcon
            style={{ color: "rgb(240, 193, 75)" }}
            onMouseEnter={() => {
              setStar1Hovered(true);
              setStar2Hovered(false);
              setStar3Hovered(false);
              setStar4Hovered(false);
              setStar5Hovered(false);
              setLocked(1);
            }}
          />
        ) : (
          <StarBorderIcon
            style={{ color: "rgb(240, 193, 75)" }}
            onMouseEnter={() => {
              setStar1Hovered(true);
              setLocked(1);
            }}
          />
        )}
        {Star2Hovered ? (
          <StarIcon
            style={{ color: "rgb(240, 193, 75)" }}
            onMouseEnter={() => {
              setStar1Hovered(true);
              setStar2Hovered(true);
              setStar3Hovered(false);
              setStar4Hovered(false);
              setStar5Hovered(false);
              setLocked(2);
            }}
          />
        ) : (
          <StarBorderIcon
            style={{ color: "rgb(240, 193, 75)" }}
            onMouseEnter={() => {
              setStar1Hovered(true);
              setStar2Hovered(true);
              setLocked(2);
            }}
          />
        )}
        {Star3Hovered ? (
          <StarIcon
            style={{ color: "rgb(240, 193, 75)" }}
            onMouseEnter={() => {
              setStar1Hovered(true);
              setStar2Hovered(true);
              setStar3Hovered(true);
              setStar4Hovered(false);
              setStar5Hovered(false);
              setLocked(3);
            }}
          />
        ) : (
          <StarBorderIcon
            style={{ color: "rgb(240, 193, 75)" }}
            onMouseEnter={() => {
              setStar1Hovered(true);
              setStar2Hovered(true);
              setStar3Hovered(true);
              setLocked(3);
            }}
          />
        )}
        {Star4Hovered ? (
          <StarIcon
            style={{ color: "rgb(240, 193, 75)" }}
            onMouseEnter={() => {
              setStar1Hovered(true);
              setStar2Hovered(true);
              setStar3Hovered(true);
              setStar4Hovered(true);
              setStar5Hovered(false);
              setLocked(4);
            }}
          />
        ) : (
          <StarBorderIcon
            style={{ color: "rgb(240, 193, 75)" }}
            onMouseEnter={() => {
              setStar1Hovered(true);
              setStar2Hovered(true);
              setStar3Hovered(true);
              setStar4Hovered(true);
              setLocked(4);
            }}
          />
        )}
        {Star5Hovered ? (
          <StarIcon
            style={{ color: "rgb(240, 193, 75)" }}
            onMouseEnter={() => {
              setStar1Hovered(true);
              setStar2Hovered(true);
              setStar3Hovered(true);
              setStar4Hovered(true);
              setStar5Hovered(true);
              setLocked(5);
            }}
          />
        ) : (
          <StarBorderIcon
            style={{ color: "rgb(240, 193, 75)" }}
            onMouseEnter={() => {
              setStar1Hovered(true);
              setStar2Hovered(true);
              setStar3Hovered(true);
              setStar4Hovered(true);
              setStar5Hovered(true);
              setLocked(5);
            }}
          />
        )}
      </div>
    );
  }
  return (
    <div className="stars">
      {hovering()}
      {console.log(locked)}
    </div>
  );
}

export default StarsToRate;
