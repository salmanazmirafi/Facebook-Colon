import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sideba/Sidebar";
import Feed from "../../components/newsFeed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileRightCover">
              <img className="profileCoverImg" src="/assets/cover.jpg" alt="" />
              <img
                className="profileUserImg"
                src="/assets/Untitled.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4>Safak Kocaoglu</h4>
              <span>Hello My Friends</span>
            </div>
          </div>
          <div className="profileButtom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
