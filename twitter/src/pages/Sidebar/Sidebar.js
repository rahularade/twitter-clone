import React, { useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreIcon from "@mui/icons-material/More";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DoneIcon from "@mui/icons-material/Done";
import {
  Divider,
  Button,
  ListItemIcon,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import "./Sidebar.css";
import Customlink from "./Customlink";
import Sidebaroptions from "./Sidebaroptions";
import { useNavigate } from "react-router-dom";
import useLoggedinuser from "../../hooks/useLoggedinuser";

const Sidebar = ({handleLogout, user}) => {
  const [anchorE1, setanchorE1] = useState(null);
  const openmenu = Boolean(anchorE1);
  const [loggedinuser] = useLoggedinuser();
  const navigate = useNavigate();
  const handleClick = (e) => {
    setanchorE1(e.currentTarget);
  };
  const handleClose = () => {
    setanchorE1(null);
  };
  
  const result = user?.email?.split("@")[0];

  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar-twitterIcon" />
      <Customlink to="/home/feed">
        <Sidebaroptions active Icon={HomeIcon} text="Home" />
      </Customlink>
      <Customlink to="/home/explore">
        <Sidebaroptions Icon={SearchIcon} text="Explore" />
      </Customlink>
      <Customlink to="/home/notification">
        <Sidebaroptions
          active
          Icon={NotificationsNoneIcon}
          text="Notifications"
        />
      </Customlink>
      <Customlink to="/home/messages">
        <Sidebaroptions active Icon={MailOutlineIcon} text="Messages" />
      </Customlink>
      <Customlink to="/home/bookmarks">
        <Sidebaroptions active Icon={BookmarkBorderIcon} text="Bookmarks" />
      </Customlink>
      <Customlink to="/home/lists">
        <Sidebaroptions active Icon={ListAltIcon} text="Lists" />
      </Customlink>
      <Customlink to="/home/profile">
        <Sidebaroptions active Icon={PermIdentityIcon} text="Profile" />
      </Customlink>
      <Customlink to="/home/more">
        <Sidebaroptions active Icon={MoreIcon} text="More" />
      </Customlink>
      <Button variant="outlined" className="sidebar-tweet" fullWidth>
        Tweet
      </Button>
      <div className="Profile-info">
        <Avatar
          src={
            loggedinuser[0]?.profileImage
              ? loggedinuser[0].profileImage
              : user && user.photoURL
          }
        />
        <div className="user-info">
          <h4>
            {loggedinuser[0]?.name
              ? loggedinuser[0].name
              : user && user.displayName}
          </h4>
          <h5>@{result}</h5>
        </div>
        <IconButton
          size="small"
          sx={{ml: "auto"}}
          aria-controls={openmenu ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-valuetext={openmenu ? "basic-menu" : undefined}
          onClick={handleClick}
        >
        <MoreHorizIcon />
        </IconButton >
        <Menu
          id="basic-menu"
          anchorEl={anchorE1}
          open={openmenu}
          onClick={handleClose}
          onClose={handleClose}
        >
          <MenuItem
            className="Profile-info1"
            onClick={() => navigate("/home/profile")}
          >
            <Avatar
              src={
                loggedinuser[0]?.profileImage
                  ? loggedinuser[0].profileImage
                  : user && user.photoURL
              }
            />
            <div className="user-info subUser-info">
              <div>
                <h4>
                  {loggedinuser[0]?.name
                    ? loggedinuser[0]?.name
                    : user && user.displayName}
                </h4>
                <h5>@{result}</h5>
              </div>
              <ListItemIcon className="done-icon"  color="blue">
                <DoneIcon /> 
              </ListItemIcon>
            </div>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>Add an existing account</MenuItem>
          <MenuItem onClick={handleLogout}>Log out @{result}</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Sidebar;
