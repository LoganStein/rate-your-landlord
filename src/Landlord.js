import React from "react";
import Nav from "./Components/Nav";
import ProfileCircle from "./Components/ProfileCircle";
import PropertyCard from "./Components/PropertyCard";
import Rating from "./Components/Rating";
import Stars from "./Components/Stars";
import "./css/Landlord.css";

function Landlord({
  headerImgURL = "https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
}) {
  return (
    <div>
      <Nav />
      <div className="landlord-header">
        <img src={headerImgURL} />
      </div>
      <ProfileCircle url="https://avatars.githubusercontent.com/u/16550375?v=4" />
      <div className="landlord-info">
        <h3>Logan Stein</h3>
        <Stars rating={4} />
        <p>
          Elit ex in nostrud labore et dolor laboris sint eu. Ipsum nulla
          cupidatat dolor et laboris in veniam exercitation ex cillum. Laborum
          eiusmod aliqua sint elit amet cillum ullamco elit adipisicing fugiat
          excepteur veniam.
        </p>
      </div>
      <div className="landlord-property-cards-container">
        <PropertyCard
          url="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80"
          alt="Photo by Sidekix Media on Unsplash"
        />
        <PropertyCard
          url="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80"
          alt="Photo by Sidekix Media on Unsplash"
        />
        <PropertyCard
          url="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80"
          alt="Photo by Sidekix Media on Unsplash"
        />
      </div>
      <div className="landlord-reviews-feed">
        <h2>Reviews</h2>
        <Rating rating={4} />
        <Rating rating={5} />
        <Rating rating={3} />
      </div>
    </div>
  );
}

export default Landlord;
