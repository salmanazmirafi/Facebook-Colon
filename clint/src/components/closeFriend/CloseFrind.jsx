import React from "react";
import "./close.css";

function CloseFrind({ user }) {
  return (
    <li className="sidebarfrindItem">
      <img className="frindImage" src={user.profilePicture} alt="" />
      <span className="frindName">{user.username}</span>
    </li>
  );
}

export default CloseFrind;
