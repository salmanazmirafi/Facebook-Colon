import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sideba/Sidebar";

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileRightCover">
              <img src="/assets/cover.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
