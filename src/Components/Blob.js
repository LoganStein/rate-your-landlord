import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../css/blobby.css";

function blobAnimation() {
  gsap.to(".blob", 4, {
    x: gsap.utils.wrap([-10, 10]),
    y: gsap.utils.wrap([-5, 5]),
    transform: "rotate(180)",
    stagger: { each: 0.5, repeat: -1, yoyo: true },
  });
}
function Blob() {
  useEffect(() => {
    console.log("I'm Running");
    blobAnimation();
  }, []);
  return (
    <div>
      <div class="loading_cont">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" id="loader">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                result="blur"
                stdDeviation="10"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 13 -7"
                result="goo"
              />
              <feBlend in2="goo" in="SourceGraphic" result="mix" />
            </filter>
            <linearGradient id="MyGradient">
              <stop offset="0%" stop-color="#42398B" />
              <stop offset="35%" stop-color="#5751A9" />

              <stop offset="60%" stop-color="#2C2761" />
              <stop offset="100%" stop-color="#42398B" />

              <stop offset="100%" stop-color="#473E91" />
            </linearGradient>
          </defs>
          <mask id="maska">
            <g class="blobs">
              <circle
                class="blob"
                cx="440"
                cy="250"
                r="30"
                transform="rotate(0) translate(0, 0) rotate(0)"
              />
              <circle
                class="blob"
                cx="500"
                cy="320"
                r="70"
                transform="rotate(0) translate(0, 0) rotate(0)"
              />
              <circle
                class="blob"
                cx="300"
                cy="390"
                r="40"
                transform="rotate(0) translate(0, 0) rotate(0)"
              />
              <circle
                class="blob"
                cx="380"
                cy="390"
                r="80"
                transform="rotate(0) translate(0, 0) rotate(0)"
              />
              <circle
                class="blob"
                cx="470"
                cy="450"
                r="20"
                transform="rotate(0) translate(0, 0) rotate(0)"
              />
            </g>
          </mask>
          <rect
            x="200"
            y="200"
            mask="url(#maska)"
            fill="url(#MyGradient)"
            width="400"
            height="400"
          />
        </svg>
      </div>
    </div>
  );
}

export default Blob;
