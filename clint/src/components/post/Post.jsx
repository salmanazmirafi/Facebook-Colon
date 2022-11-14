import React, { useState } from "react";
import { Users } from "../../dumiData";
import "./post.css";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [islike, setIslike] = useState(false);

  const likeHandaler = () => {
    setLike(islike ? like - 1 : like + 1);
    setIslike(!islike);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTopbar">
          <div className="postLeft">
            <img
              className="postProfileImage"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postRight">
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
        <div className="postCenter">
          <span>{post.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postLike">
            <i className="i1 fa-solid fa-heart" onClick={likeHandaler}></i>
            <span>{like} people like it</span>
          </div>
          <div className="postLike">
            <i className="i2 fa-solid fa-comment"></i>
            <span>{post.comment} comments</span>
          </div>
          <div className="postLike">
            {" "}
            <i className="i3 fa-solid fa-share"></i>
            <span>1k Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
