import React from "react";
import "./right.css";
import { Users } from "../../dumiData";
import Online from "../online/Online";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="brirthContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthText">
            <b>Eliana Eliana</b> and <b>3 other friends</b> have a birthday
            today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="ads" />
        <h4 className="title">Online Friends</h4>
        <ul className="rightFrindLis">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
