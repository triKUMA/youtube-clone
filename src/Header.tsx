import React from "react";
import "./Header.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import VideoCameraFrontOutlinedIcon from "@mui/icons-material/VideoCameraFrontOutlined";
import Menu from "./Menu";
import { Avatar } from "@mui/material";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <button className="header-menu">
          <MenuIcon className="header-menuIcon" />
        </button>
        <button className="header-title">
          <YouTubeIcon className="header-icon" />
          <p>
            YouTube
            <span className="locale">AU</span>
          </p>
        </button>
      </div>
      <form className="header-search">
        <input type="text" placeholder="Search" />
        <button className="header-search-submit" type="submit">
          <SearchIcon />
        </button>
        <button className="header-search-voice">
          <MicIcon />
        </button>
      </form>
      <div className="header-right">
        <Menu Icon={VideoCameraFrontOutlinedIcon} />
        <Menu Icon={AppsIcon} />
        <Menu Icon={NotificationsOutlinedIcon} />
        <Menu avatar="?" />
      </div>
    </div>
  );
}

export default Header;
