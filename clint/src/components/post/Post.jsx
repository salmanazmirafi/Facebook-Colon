import React from "react";
import { Users } from "../../dumiData";
import "./post.css";

const Post = ({ post }) => {
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
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
        <div className="postCenter">
          <span>{post.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postLike">
            <i className="i1 fa-solid fa-heart"></i>
            <span>{post.like}</span>
          </div>
          <div className="postLike">
            <i class="i2 fa-solid fa-comment"></i>
            <span>{post.comment}</span>
          </div>
          <div className="postLike">
            {" "}
            <i class="i3 fa-solid fa-share"></i>
            <span>1k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
