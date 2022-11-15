import React, { useEffect, useState } from "react";
import { Posts } from "../../dumiData";
import Post from "../post/Post";
import Seare from "../shere/Seare";
import "./right.css";
import axios from "axios";

function Feed() {
  const [posts, serPost] = useState([]);

  useEffect(() => {
    const fatchData = async () => {
      const res = axios.get("post/timeline/636ff3e719dce2419158a1f3");
      console.log(res);
    };

    fatchData();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Seare />
        {/* {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))} */}
      </div>
    </div>
  );
}

export default Feed;
