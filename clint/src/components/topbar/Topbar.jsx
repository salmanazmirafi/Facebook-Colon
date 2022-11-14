import "./topbar.css";
import profile from "../../assets/Untitled.jpg";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Facebook</span>
      </div>
      <div className="topBarCenter">
        <div className="serchbar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topBarLinkss">
          <span className="topBarLinks">Homepage</span>
          <span className="topBarLinks">Timeline</span>
        </div>
        <div className="topBarIcon">
          <div className="topBarIconItem">
            <i className="icon-top fa-solid fa-user"></i>
            <span className="icconBage">1</span>
          </div>
          <div className="topBarIconItem">
            <i className="icon-top fa-brands fa-facebook-messenger"></i>
            <span className="icconBage">7</span>
          </div>
          <div className="topBarIconItem">
            <i className="icon-top fa-solid fa-bell"></i>
            <span className="icconBage">5</span>
          </div>
        </div>

        <img src={profile} alt="" className="topbarImg" />
      </div>
    </div>
  );
};

export default Topbar;
