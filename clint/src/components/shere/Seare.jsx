import React from "react";
import "./seher.css";

function Seare() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="/assets/Untitled.jpg"
            alt=""
            className="shareProfileImage"
          />
          <input placeholder="What's in your mind" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="sharePositions">
            <div className="shareOption">
              <i className="fa-solid fa-photo-film"></i>
              <span className="shareOptionText">Photo/Video</span>
            </div>
            <div className="shareOption">
              <i className="fa-solid fa-tag"></i>
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <i className="fa fa-location-dot"></i>
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <i className="fa-solid fa-face-smile"></i>
              <span className="shareOptionText">Feeling/activity</span>
            </div>
          </div>
          <div className="shareButton">Share</div>
        </div>
      </div>
    </div>
  );
}

export default Seare;
