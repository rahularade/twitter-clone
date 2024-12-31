import React from "react";
import "./Posts.css";
import { Avatar } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

const Posts = ({p}) => {
  const { name, username, profilephoto, post, photo } = p;
  return (
    <div className="post">
      <div className="post-avatar">
        <Avatar src={profilephoto} />
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="post-headerText">
            <h3>
              {name} <span className="post-headerSpecial">
                <VerifiedUserIcon className="post-badge" /> {username}
              </span>
            </h3>
          </div>
          <div className="post-headerDescription">
            <p>{post}</p>
          </div>
        </div>
        <img src={photo} alt="" width='200'/>
        <div className="post-footer">
            <ChatBubbleOutlineIcon className="post-footer-icon" fontSize="small"/>
            <RepeatIcon className="post-footer-icon" fontSize="small"/>
            <FavoriteBorderIcon className="post-footer-icon" fontSize="small"/>
            <PublishIcon className="post-footer-icon" fontSize="small"/>
        </div>
      </div>
    </div>
  );
};

export default Posts;
