import React from "react";
import { Posts } from "../../dumiData";
import Post from "../post/Post";
import Seare from "../shere/Seare";
import "./right.css";

function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Seare />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
