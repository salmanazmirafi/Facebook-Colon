import React from "react";
import "./sidebar.css";
import profile from "../../assets/Untitled.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="profile">
          <img src={profile} alt="" className="topbarImg" />
          <span className="idName">Eliana Eliana</span>
        </div>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <i class="sidebarListIcon fa-solid fa-rss"></i>
            <span className="sidebarListItemText">Feed</span>
          </li>

          <li className="sidebarListItem">
            <i class="sidebarListIcon fa-solid fa-message"></i>
            <span className="sidebarListItemText">Chats</span>
          </li>

          <li className="sidebarListItem">
            <i class="sidebarListIcon fa-solid fa-circle-play"></i>
            <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItem">
            <i class="sidebarListIcon fa-solid fa-user-group"></i>
            <span className="sidebarListItemText">Group</span>
          </li>

          <li className="sidebarListItem">
            <i class="sidebarListIcon fa-solid fa-bookmark"></i>
            <span className="sidebarListItemText">Bookmark</span>
          </li>

          <li className="sidebarListItem">
            <i class="sidebarListIcon fa-solid fa-circle-question"></i>
            <span className="sidebarListItemText">Questions</span>
          </li>

          <li className="sidebarListItem">
            <i class="sidebarListIcon fa-solid fa-briefcase"></i>
            <span className="sidebarListItemText">Jobs</span>
          </li>

          <li className="sidebarListItem">
            <i class="sidebarListIcon fa-solid fa-calendar-day"></i>
            <span className="sidebarListItemText">Events</span>
          </li>

          <li className="sidebarListItem">
            <i class="sidebarListIcon fa-solid fa-graduation-cap"></i>

            <span className="sidebarListItemText">Courses</span>
          </li>

          <button className="sidebarButton">Show More</button>

          <hr className="sideht" />
          <ul className="sidebarfrind">
            <li className="sidebarfrindItem">
              <img className="frindImage" src="/assets/1.jpg" alt="" />
              <span className="frindName">Jon De</span>
            </li>
            <li className="sidebarfrindItem">
              <img className="frindImage" src="/assets/1.jpg" alt="" />
              <span className="frindName">Jon De</span>
            </li>
            <li className="sidebarfrindItem">
              <img className="frindImage" src="/assets/1.jpg" alt="" />
              <span className="frindName">Jon De</span>
            </li>
            <li className="sidebarfrindItem">
              <img className="frindImage" src="/assets/1.jpg" alt="" />
              <span className="frindName">Jon De</span>
            </li>
            <li className="sidebarfrindItem">
              <img className="frindImage" src="/assets/1.jpg" alt="" />
              <span className="frindName">Jon De</span>
            </li>
            <li className="sidebarfrindItem">
              <img className="frindImage" src="/assets/1.jpg" alt="" />
              <span className="frindName">Jon De</span>
            </li>
            <li className="sidebarfrindItem">
              <img className="frindImage" src="/assets/1.jpg" alt="" />
              <span className="frindName">Jon De</span>
            </li>
            <li className="sidebarfrindItem">
              <img className="frindImage" src="/assets/1.jpg" alt="" />
              <span className="frindName">Jon De</span>
            </li>
            <li className="sidebarfrindItem">
              <img className="frindImage" src="/assets/1.jpg" alt="" />
              <span className="frindName">Jon De</span>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
