import React from "react";
import Rating from "./Components/Rating";
import "./css/dashboard.css";
import Nav from "./Components/Nav";
import NewReview from "./Components/NewReview";
import LLProfileCard from "./Components/LLProfileCard";
import ProfileCircle from "./Components/ProfileCircle";

function Dashboard({
  userIMG,
  username,
  headerIMG = "https://s3-alpha-sig.figma.com/img/accd/818e/aa6e1839d8e52ec648fd5efb4e2e21b3?Expires=1624233600&Signature=SDS7zmAJ2gxjRi1PUN-~cxRZpwi~wog7oJpnsiACCzwqLrfeb62jhTMzKiW0DJ2Pnu-0fcSx791UPgA0YhPerymdZrZrWS88iUh2vCHqaZUlB4ajHApLaGfUnz9Q4QuhuHgkKa40RCgQvRmHkjsnLxfqJ5hpthzz8EYDBvOpoogdDUWpTS8VdeNAIk6gfksZtPdfPMDLwUEWeZ8S9ega03pH-tx-THWHychQ-2JZvAQ3xuW6Vj7JPTP5RLGoQcBgKZP4p8ZWgkqSp9RmviiGhb3v-Y98tYtDw8oD9-oASvkdas1GrhKYHexP-XniCCmdFAjGS2-1h8thT8IDDz-xcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
}) {
  return (
    <div className="dashboard-container">
      <Nav />
      <div className="dashboard-header">
        <img src={headerIMG} />
      </div>
      <ProfileCircle url="https://avatars.githubusercontent.com/u/16550375?v=4" />
      <div className="user-info">
        <h2>Logan Stein</h2>
      </div>
      <NewReview />
      <div className="dashboard-feed">
        <div className="users-landlord">
          <LLProfileCard
            name={"Logan Stein"}
            rating={4}
            location={"Chicago, IL"}
            picURL={"https://avatars.githubusercontent.com/u/16550375?v=4"}
            propertyNum={3}
            usersRating={5}
          />
        </div>
        <div className="ratings-feed">
          <div className="users-review">
            <h3 className="rating-subhead">Your Ratings</h3>
            <Rating rating={4} />
            <Rating rating={3} />
          </div>
          <div className="users-review">
            <h3 className="rating-subhead">Other's Ratings</h3>
            <Rating rating={3} />
            <Rating rating={5} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
