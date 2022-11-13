import React from "react";
import Feed from "../../components/newsFeed/Feed";
import "./Home.css";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sideba/Sidebar";
import Topbar from "../../components/topbar/Topbar";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
